// Resume data - shared across all pages
const resumeData = {
    contactInfo: {
        email: "aykutkutlu811@gmail.com"
    },
    contact: {
        title: "Let's Start a Conversation",
        subtitle: "Whether you're looking for a data scientist, have a project in mind, or just want to network, I'm always open to interesting discussions.",
        methods: [
            {
                icon: "fas fa-envelope",
                title: "Email Me",
                description: "Reach me for business inquiries",
                link: "mailto:aykutkutlu811@gmail.com",
                linkText: "aykutkutlu811@gmail.com"
            },
            {
                icon: "fab fa-linkedin",
                title: "LinkedIn",
                description: "Connect with me professionally",
                link: "https://www.linkedin.com/in/aykut-kutlu-562867236/",
                linkText: "https://www.linkedin.com/in/aykut-kutlu",
                target: "_blank"
            },
            {
                icon: "fab fa-github",
                title: "GitHub",
                description: "My code repositories and open source contributions",
                link: "https://github.com/simple1one",
                linkText: "github.com/AykutKutlu",
                target: "_blank"
            }
        ],
        quickInfo: [
            {
                icon: "fas fa-map-marker-alt",
                title: "Location",
                content: "Ankara, Türkiye",
                link: "https://www.google.com/maps/place/Ankara/@39.902959,32.4509538,11z/data=!3m1!4b1!4m12!1m5!3m4!2zMznCsDU1JzMwLjYiTiAzMsKwNTAnMTIuNSJF!8m2!3d39.925179!4d32.8368!3m5!1s0x14d347d520732db1:0xbdc57b0c0842b8d!8m2!3d39.9333635!4d32.8597419!16zL20vMGp5dw?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D",
                subtitle: "Available for remote work worldwide & willing to relocate"
            },
            {
                icon: "fas fa-clock",
                title: "Response Time",
                content: "Usually within 24 hours",
                subtitle: "Monday to Friday, 8 AM - 8 PM (GMT+3)"
            },
            {
                icon: "fas fa-language",
                title: "Languages",
                content: "Turkish, English",
                subtitle: "Comfortable in both languages"
            }
        ]
    },
    about: {
        introduction: [
            "I am a data scientist with hands-on experience in financial analysis, market research, and predictive modeling across equity and cryptocurrency markets. I have worked on end-to-end development of forecasting models using machine learning techniques such as XGBoost and LSTM, as well as time series models like ARIMA and Holt-Winters. My expertise includes feature engineering, model optimization (Optuna), and building interactive dashboards that deliver real-time insights.",
            "I have also contributed to M&A projects, performing valuation analysis, due diligence, and financial modeling to support strategic transactions. Beyond technical skills, I excel at translating complex data into actionable business strategies, ensuring that insights are not just delivered but implemented effectively.",
            "Fluent in Turkish and English, I am results-driven, detail-oriented, and thrive in fast-paced environments where data is at the core of decision-making."
        ],
        quickFacts: [
            {
                icon: "fas fa-map-marker-alt",
                title: "Location",
                content: "Ankara, Türkiye"
            },
            {
                icon: "fas fa-graduation-cap",
                title: "Education",
                content: "Bachelor of Economics",
                subtitle: "Hacettepe University"
            },
            {
                icon: "fas fa-briefcase",
                title: "Experience",
                content: "3+ Years Experience",
                subtitle: "Data Science"
            },
            {
                icon: "fas fa-globe",
                title: "Languages",
                content: "Turkish (Native)",
                subtitle: "English (Fluent)"
            },
            {
                icon: "fas fa-shield-alt",
                title: "Military Service",
                content: "Completed",
                subtitle: " "
            }
        ],
        services: [
            {
                icon: "fas fa-chart-line",
                title: "Predictive Analytics",
                description: "Develop advanced forecasting models for financial markets using machine learning and time series techniques to provide accurate and actionable predictions."
            },
            {
                icon: "fas fa-coins",
                title: "Valuation & Financial Modeling",
                description: "Perform company valuations, build scenario-based financial models, and support M&A transactions with in-depth analytical insights."
            },
            {
                icon: "fas fa-database",
                title: "Data Science Solutions",
                description: "Design and deploy end-to-end data science workflows, combining feature engineering, model optimization, and interactive analytics dashboards."
            },
            {
                icon: "fas fa-server",
                title: "Data Engineering",
                description: "Build scalable data pipelines, automate ETL processes, and manage cloud-based data infrastructures for efficient data operations."
            },
            {
                icon: "fas fa-globe",
                title: "Market Research & Competitive Intelligence",
                description: "Conduct in-depth market analysis and competitor benchmarking to support strategic business decisions and identify emerging market trends."
            },
            {
                icon: "fas fa-brain",
                title: "AI & Machine Learning Deployment",
                description: "Integrate AI-driven solutions into business workflows, from model development to deployment, ensuring scalable and production-ready applications."
            },
            {
                icon: "fas fa-laptop-code",
                title: "Custom Dashboard Development",
                description: "Build interactive and dynamic dashboards for real-time monitoring of KPIs, financial metrics, and predictive analytics outputs."
            },
            {
                icon: "fas fa-project-diagram",
                title: "End-to-End Data Strategy Consulting",
                description: "Provide strategic consulting on data architecture, analytics roadmaps, and digital transformation initiatives to align data capabilities with business goals."
            }
        ]
    },
    professionalExperience: [
        {
            role: "Data Scientist - Monitoring and Evaluation",
            company: "Türk Kızılay | KIZILAYKART",
            duration: "2023/04 - present",
            location: "Ankara, TR",
            description: [
                "Conducted in-depth data analysis and delivered comprehensive reports to support strategic, data-driven decision-making processes across humanitarian and economic projects.",
                "Performed Minimum Expenditure Basket (MEB) calculations to assess essential goods and services, contributing to economic assessments and policy recommendations.",
                "Executed vulnerability assessments using statistical models to identify at-risk populations and design targeted intervention strategies.",
                "Developed regression and time series forecasting models to predict trends, optimize resource allocation, and support scenario-based planning.",
                "Utilized advanced statistical tools (R, Python, SPSS) to automate data analysis workflows, enhancing efficiency and accuracy in large-scale datasets.",
                "Collaborated with cross-functional teams including researchers, policymakers, and field experts to refine data-driven strategies and improve program effectiveness.",
                "Conducted profiling studies at household and individual levels, identifying socio-economic risk factors to inform targeted assistance programs.",
                "Designed targeting methodologies and program optimization strategies using logistic regression, robust regression models, and decision trees for effective resource allocation.",
                "Developed and evaluated multiple scenario-based profiling models, performing caseload calculations and forecasting to enhance intervention planning and anticipate future needs."
            ]
        }
    ],
    projects: [
        {
            name: "Real-Time Data Integration with ODK API",
            date: "2024/01",
            description: [
                "Engineered a real-time data pipeline integrating ODK APIs for automated data ingestion and immediate quality assurance checks.",
                "Built an interactive Streamlit reporting dashboard for real-time monitoring and data visualization.",
                "Significantly reduced manual workload for data monitoring through a Streamlit dashboard providing live tracking and visualization of data quality metrics."
            ],
            technologies: ["Python", "ODK API", "Streamlit", "Data Pipeline", "Real-time Processing"],
            link: "https://financial-analysis1.streamlit.app/"
        },
        {
            name: "Social Assistance MEB Calculation Tool",
            date: "2023/11",
            description: [
                "Developed an interactive Shiny application to automate Minimum Expenditure Basket (MEB) calculations for social assistance programs.",
                "Enabled dynamic parameter inputs and real-time result visualization, streamlining policy simulations and economic assessments.",
                "Enhanced accuracy and transparency in cost estimations for humanitarian cash assistance frameworks."
            ],
            technologies: ["R", "Shiny", "Data Visualization", "MEB Framework"],
            link: "https://aykut.shinyapps.io/KIZILAYKART_MEB_Calculation/"
        },
        {
            name: "Financial Time Series Forecasting App",
            date: "2023/10",
            description: [
                "Designed a Shiny application integrating ARIMA, Holt-Winters, XGBoost, and LSTM models for forecasting financial time series data.",
                "Provided scenario-based projections and technical indicator analysis for equities and cryptocurrencies.",
                "Facilitated interactive exploration of model outputs with customizable parameters and visualization."
            ],
            technologies: ["R", "Shiny", "Time Series", "Machine Learning", "Forecasting"],
            link: "https://aykut.shinyapps.io/finansal_ts/"
        },
        {
            name: "FSP Mapping and Vulnerability Profiling",
            date: "2023/09",
            description: [
                "Developed a geospatial Shiny dashboard to map Financial Service Provider (FSP) coverage and overlay vulnerability indices.",
                "Enabled decision-makers to optimize service delivery routes and prioritize high-risk zones.",
                "Incorporated interactive filters and dynamic heatmaps for granular analysis of regional vulnerabilities."
            ],
            technologies: ["R", "Shiny", "Geospatial Analysis", "Mapping", "Data Visualization"],
            link: "https://aykutkizilaykart.shinyapps.io/FSP_Mapping/"
        },
        {
            name: "User Feedback Sentiment Analysis App",
            date: "2024/02",
            description: [
                "Built a Streamlit application to perform sentiment analysis on large-scale user feedback data.",
                "Integrated NLP models to classify sentiments and visualize trends over time, aiding program monitoring and feedback loops.",
                "Automated report generation for continuous feedback analysis, reducing manual processing time."
            ],
            technologies: ["Python", "Streamlit", "NLP", "Sentiment Analysis"],
            link: "https://anewliz-app.streamlit.app/"
        }
    ],
    skills: [
        { 
            name: "Programming Languages", 
            type: 'levelled',
            skills: [
                { name: "Python", proficiency: "Advanced" },
                { name: "Gretl", proficiency: "Advanced" },
                { name: "E-Views", proficiency: "Intermediate" },
                { name: "SQL", proficiency: "Advanced" },
                { name: "R Programming", proficiency: "Advanced" }
            ] 
        },
        { 
            name: "Machine Learning Frameworks", 
            type: 'levelled',
            skills: [
                { name: "Scikit-learn", proficiency: "Intermediate" },
                { name: "TensorFlow", proficiency: "Intermediate" },
                { name: "PyTorch", proficiency: "Intermediate" },
                { name: "Hugging Face", proficiency: "Intermediate" },
                { name: "XGBoost", proficiency: "Intermediate" }
            ] 
        },
        { 
            name: "Deep Learning", 
            type: 'levelled',
            skills: [
                { name: "CNNs", proficiency: "Intermediate" },
                { name: "RNNs", proficiency: "Intermediate" },
                { name: "LSTMs", proficiency: "Intermediate" },
                { name: "Transfer Learning", proficiency: "Intermediate" },
                { name: "Pre-trained Models (BERT, ResNet)", proficiency: "Beginner" },
                { name: "Fine-tuning Techniques", proficiency: "Beginner" }
            ] 
        },
        { 
            name: "Databases", 
            type: 'levelled',
            skills: [
                { name: "PostgreSQL", proficiency: "Advanced" },
                { name: "MySQL", proficiency: "Intermediate" }
            ] 
        },
        {
            name: "GIS & Spatial Analysis",
            type: "levelled",
            skills: [
                { name: "GeoPandas", proficiency: "Intermediate" },
                { name: "OpenStreetMap APIs", proficiency: "Intermediate" },
                { name: "QGIS", proficiency: "Intermediate" },
                { name: "Spatial Statistics", proficiency: "Intermediate" },
                { name: "sf (Simple Features)", proficiency: "Intermediate" },
                { name: "tmap", proficiency: "Intermediate" },
                { name: "leaflet (R)", proficiency: "Intermediate" },
                { name: "raster", proficiency: "Basic" },
                { name: "sp", proficiency: "Basic" }
            ]
        },
        { 
            name: "Web Development", 
            type: 'levelled',
            skills: [
                { name: "Streamlit", proficiency: "Advanced" },
                { name: "FastAPI", proficiency: "Intermediate" },
                { name: "R Shiny", proficiency: "Advanced" }
            ] 
        },
        {
            name: "Soft Skills",
            type: "list",
            skills: [
                { name: "Project Management" },
                { name: "Adaptability and Resilience" },
                { name: "Analytical and Critical Thinking" },
                { name: "Ethical Awareness and Data Responsibility" },
                { name: "Creative Problem Solving" },
                { name: "Data Storytelling and Visualization" },
                { name: "Cross-functional Collaboration" },
                { name: "Effective Communication with Stakeholders" },
                { name: "Strategic Decision Making under Pressure" },
                { name: "Attention to Detail and Data Accuracy" },
                { name: "Proactive Initiative and Ownership" },
                { name: "Time Management and Prioritization" }
            ]
        },
        { 
            name: "M&E Frameworks/Tools", 
            type: 'list',
            skills: [
                { name: "Logical Framework Approach (Logframes)" },
                { name: "Theory of Change (ToC)" },
                { name: "Results-Based Management (RBM)" },
                { name: "Indicator Development & Tracking" },
                { name: "Impact Assessment" }
            ] 
        },
        { 
            name: "Data Collection & Management", 
            type: 'list',
            skills: [
                { name: "Advanced ODK (Complex Forms, ODK Central, API)" },
                { name: "Survey Implementation" },
                { name: "Data Quality Assurance Protocols" },
                { name: "Real-time Data Monitoring" }
            ] 
        }
    ]
};
