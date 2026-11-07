"""Check the static site without external packages or network access."""
import json
import re
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.refs = []
        self.frames = []
        self.keys = []
        self.h1 = 0
        self.issues = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.append(a['id'])
        for name in ('href', 'src'):
            if name in a:
                self.refs.append(a[name])
        if 'data-i18n' in a:
            self.keys.append(a['data-i18n'])
        if tag == 'iframe':
            self.frames.append(a)
        if tag == 'h1':
            self.h1 += 1
        if tag == 'img' and 'alt' not in a:
            self.issues.append('Image missing alt attribute')


def main():
    pages = {}
    errors = []
    for path in ROOT.glob('*.html'):
        page = Page()
        page.feed(path.read_text(encoding='utf-8'))
        pages[path.name] = page
    for name, page in pages.items():
        errors.extend(f'{name}: {message}' for message in page.issues)
        if page.h1 != 1:
            errors.append(f'{name}: expected one h1, got {page.h1}')
        errors.extend(f'{name}: duplicate id {key}' for key, n in Counter(page.ids).items() if n > 1)
        for ref in page.refs:
            url = urlsplit(ref)
            if url.scheme or url.netloc:
                continue
            dest = unquote(url.path) or name
            if not (ROOT / dest).exists():
                errors.append(f'{name}: missing file {dest}')
            elif url.fragment and dest in pages and unquote(url.fragment) not in pages[dest].ids:
                errors.append(f'{name}: missing anchor {ref}')
        for frame in page.frames:
            if not frame.get('title') or frame.get('loading') != 'lazy' or 'allowfullscreen' not in frame:
                errors.append(f'{name}: iframe accessibility/loading/fullscreen attributes missing')
            if 'autoplay=1' in frame.get('src', ''):
                errors.append(f'{name}: unexpected autoplay')

    copy = (ROOT / 'home-copy.js').read_text(encoding='utf-8')
    dictionaries = json.loads(copy.split('window.KUTVOKS_COPY = ', 1)[1].rstrip(';\n'))
    for language in ('tr', 'en'):
        missing = set(pages['index.html'].keys) - dictionaries[language].keys()
        errors.extend(f'Missing {language} translation: {key}' for key in missing)
    expected = {'zaQTnNX64Eg', 'CSgLeQA-TLk', '5iqZ6PtnM9A'}
    embedded = {urlsplit(frame['src']).path.rsplit('/', 1)[-1] for frame in pages['ops.html'].frames}
    if expected != embedded or len(pages['ops.html'].frames) != 3:
        errors.append('OPS must contain all three requested videos exactly once')
    apps = json.loads((ROOT / 'content/apps.json').read_text(encoding='utf-8'))
    for app in apps.values():
        page = pages[app['page']]
        for group in app['groups']:
            if group['id'] not in page.ids:
                errors.append(f'{app["page"]}: feature missing from output: {group["id"]}')
    ads = (ROOT / 'app-ads.txt').read_text(encoding='utf-8-sig').splitlines()
    if 'google.com, pub-6479015583137008, DIRECT, f08c47fec0942fa0' not in ads:
        errors.append('Required Google seller declaration missing')
    if errors:
        raise SystemExit('\n'.join(errors))
    print(f'PASS: {len(pages)} pages; local files/anchors; headings/images; TR/EN coverage; 3 OPS videos; complete feature catalog; AdMob declaration.')


if __name__ == '__main__':
    main()
