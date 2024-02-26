import { IExperienceModel } from '../../domail/model/portfolio.model';

export const experienceMock: IExperienceModel[] = [
  {
    title: 'Full-time as a Frontend Developer at PT. Thinkspedia Digital Solusindo',
    label: 'February 2023 - Present',
    description:
      'In February, I decided to switch jobs to Thinkspedia. As a full-time employee, I was given responsibility for several projects, and I had several colleagues as my juniors. This became a new challenge for me.',
    url: 'working-at-pt-orde-digital-intelektual',
    image: [
      'images/experience/thinks-2.jpg',
      'images/experience/thinks-3.JPG',
    ],
    alt: ['photo-thinks-2', 'photo-thinks-3'],
  },

  {
    title: 'Full-time as a Frontend Developer at PT. Nitoza Indonesia Mandiri',
    label: 'June 2022 - February 2023',
    description:
      'After completing the internship program, I was entrusted to continue working at Nitoza as a full-time employee. I began to be directly involved in various projects, and I started to be given responsibilities to complete projects in collaboration with project managers.',
    url: 'fulltime-ntz',
    image: ['images/experience/ntz-6.jpg', 'images/experience/ntz-5.jpg'],
    alt: ['photo-ntz-6', 'photo-ntz-5'],
  },
  {
    title: 'Intern as a Mobile Developer at PT. Nitoza Indonesia Mandiri',
    label: 'March 2022 - June 2022',
    description:
      'This is my first job in the field of programming. In addition to learning, I also started to get involved in my first project, and this is a valuable experience for my life.',
    url: 'intern-ntz',
    image: [
      'images/experience/ntz-1.jpg',
      'images/experience/ntz-2.jpg',
      'images/experience/ntz-3.jpg',
    ],
    alt: ['photo-ntz-1', 'photo-ntz-2', 'photo-ntz-3'],
  },
  {
    title: 'Mobile Flutter Class Bootcamp in the Candradimuka Jabar Coding Camp 2021 Program',
    label: 'August 2021 - March 2022',
    description:
      'Participated in Bootcamp scholarship activities from Jabar Digital Service for approximately 8 months. This was the first step in my career as a software engineer.',
    url: 'intern-jcc',
    image: [
      'images/experience/jcc-1.jpg',
      'images/experience/jcc-2.webp',
      'images/experience/jcc-3.webp',
    ],
    alt: ['photo-jcc-1', 'photo-jcc-2', 'photo-jcc-3'],
  },
];

export const projectsMock: IExperienceModel[] = [
  {
    title: 'PORTAL WARGA JAGA SUARA',
    label: 'Next.js, ChartJs, Tailwindcss, Figma',
    description:
      'Introducing PortalWJS, your comprehensive platform for real-time data collection on presidential candidate votes at every polling station (TPS) and reporting electoral violations. Accessible on both mobile and desktop devices, PortalWJS revolutionizes the electoral process by providing a user-friendly interface for citizens and election observers. \n With PortalWJS, users can seamlessly input and track presidential candidate votes at each TPS, ensuring accurate and transparent election results. Whether on the go or at a desktop computer, our platform empowers users to participate actively in the electoral process by contributing to the collection of critical voting data. \n Additionally, PortalWJS serves as a vital tool for reporting electoral violations. Users can easily document and report any irregularities or misconduct witnessed during the electoral process, promoting accountability and safeguarding the integrity of the election.',
    url: 'https://portal.wargajagasuara.com',
    image: ['images/projects/portal.png'],
    alt: ['photo-portal'],
  },
  {
    title: 'DASHBOARD WARGA JAGA SUARA',
    label: 'React (Vite), ChartJs, Tailwindcss, Figma',
    description:
      "Introducing Verifile: Your Centralized Dashboard for Validating Election Results and Reporting Violations Nationwide. Verifile is the essential tool for overseeing the authenticity of electoral reports and managing the documentation of violations during elections across Indonesia. \n With Verifile's user-friendly interface, election officials and monitors can efficiently verify vote tallies submitted by volunteers from all regions. The dashboard provides real-time updates and visual representations of election data, enabling quick identification of discrepancies and ensuring the integrity of the electoral process. \n Moreover, Verifile facilitates the seamless reporting of electoral violations. Users can submit detailed reports of irregularities directly through the dashboard, including evidence such as photos or videos. These reports are swiftly reviewed and addressed by relevant authorities, promoting accountability and upholding electoral standards.",
    url: 'https://ahotsa.wargajagasuara.com',
    image: ['images/projects/canvassing.png'],
    alt: ['photo-canvassing'],
  },
  {
    title: 'QUICK REAL COUNT WARGA JAGA SUARA',
    label: 'React (Vite), ChartJs, Apache ECharts, Tailwindcss, Figma',
    description:
      "Introducing QuickVote: Your Ultimate Destination for Real-Time Presidential Election Results. QuickVote offers a dynamic platform showcasing voting data from across Indonesia, including each province, in a timely manner.\n With QuickVote, users can stay informed about the latest presidential election results as they unfold, providing a comprehensive overview of voting trends nationwide. Whether you're interested in the overall vote count for the entire country or want to delve into specific provincial breakdowns, QuickVote offers intuitive navigation and up-to-date information.",
    url: 'https://relawan.wargajagasuara.com/qrc',
    image: ['images/projects/qrc.png'],
    alt: ['photo-qrc'],
  },
  {
    title: 'POLMARK INDONESIA',
    label: 'Angular, Leaflet, ng2-file-upload, Bootstrap, Figma',
    description:
      "Introducing Polmark Indonesia, a groundbreaking project developed by our team to gather and analyze election results across Indonesia's provinces. Polmark Indonesia serves as your ultimate destination for comprehensive data on electoral victories nationwide. Dive into our intuitive platform to explore detailed breakdowns of vote tallies and candidate performances in every province. \n Join us in revolutionizing transparency and civic engagement in Indonesian elections. Experience the power of data-driven insights with Polmark Indonesia, our project dedicated to decoding Indonesia's electoral landscape.",
    url: 'https://polmark-digiboard-v2.dig-inc.asia/dashboard/home',
    image: ['images/projects/polmark.png'],
    alt: ['photo-polmark'],
  },
  {
    title: 'Dashboard DIGIPOL',
    label: 'Angular, ng2-file-upload, apexcharts, Bootstrap, Figma',
    description:
      'Introducing Digipol: your all-in-one platform for effective campaign volunteer management. From organizing door-to-door canvassing to staffing events, our streamlined system empowers you to maximize outreach and allocate resources efficiently. \n Easily create volunteer schedules, assign tasks, and track progress in real-time with our intuitive interface. Digipol goes beyond management, offering robust data collection tools to gather valuable voter insights, from demographics to issue prioritization. \n Join successful campaigns leveraging Digipol to mobilize supporters, manage initiatives, and secure victory. Revolutionize your approach with Digipol today.',
    url: 'https://dcc.digipol.id/apps/volunteer/dashboard',
    image: ['images/projects/simrel.png'],
    alt: ['photo-digipol'],
  },
];
