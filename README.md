<div align="center">

  <a name="readme-top"></a>
  # Cloud Services Website

  [![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey)](LICENSE)
  ![Status](https://img.shields.io/badge/Status-Completed-success)
  [![Technology](https://img.shields.io/badge/Technology-HTML5%20%7C%20CSS3-orange)](https://github.com/Amey-Thakur/CLOUD-SERVICES-WEBSITE)
  [![Developed by Amey Thakur and Mega Satish](https://img.shields.io/badge/Developed%20by-Amey%20Thakur%20%26%20Mega%20Satish-blue.svg)](https://github.com/Amey-Thakur/CLOUD-SERVICES-WEBSITE)

  A modern, responsive landing page template designed for cloud hosting and service providers, featuring a clean aesthetic and semantic structure.

  **[Source Code](Source%20Code/)** &nbsp;·&nbsp; **[Technical Specification](docs/SPECIFICATION.md)** &nbsp;·&nbsp; **[Live Demo](https://amey-thakur.github.io/CLOUD-SERVICES-WEBSITE/)**

</div>

---

<div align="center">

  [Authors](#authors) &nbsp;·&nbsp; [Overview](#overview) &nbsp;·&nbsp; [Features](#features) &nbsp;·&nbsp; [Structure](#project-structure) &nbsp;·&nbsp; [Results](#results) &nbsp;·&nbsp; [Quick Start](#quick-start) &nbsp;·&nbsp; [Usage Guidelines](#usage-guidelines) &nbsp;·&nbsp; [License](#license) &nbsp;·&nbsp; [About](#about-this-repository) &nbsp;·&nbsp; [Acknowledgments](#acknowledgments)

</div>

---

<!-- AUTHORS -->
<div align="center">

  <a name="authors"></a>
  ## Authors

  **Terna Engineering College | Computer Engineering | Batch of 2022**

| <a href="https://github.com/Amey-Thakur"><img src="https://github.com/Amey-Thakur.png" width="150" height="150" alt="Amey Thakur"></a><br>[**Amey Thakur**](https://github.com/Amey-Thakur)<br><br>[![ORCID](https://img.shields.io/badge/ORCID-0000--0001--5644--1575-green.svg)](https://orcid.org/0000-0001-5644-1575) | <a href="https://github.com/msatmod"><img src="Mega/Mega.png" width="150" height="150" alt="Mega Satish"></a><br>[**Mega Satish**](https://github.com/msatmod)<br><br>[![ORCID](https://img.shields.io/badge/ORCID-0000--0002--1844--9557-green.svg)](https://orcid.org/0000-0002-1844-9557) |
| :---: | :---: |

</div>

> [!IMPORTANT]
> ### 🤝🏻 Special Acknowledgement
> *Special thanks to **[Mega Satish](https://github.com/msatmod)** for her meaningful contributions, guidance, and support that helped shape this work.*

---

<!-- OVERVIEW -->
<a name="overview"></a>
## Overview

The **Cloud Services Website** project creates a professional-grade frontend layout for a technology infrastructure company. It focuses on presenting complex service information clearly and efficiently using pure HTML5 and CSS3.

The design emphasizes readability, grid-based layouts, and responsive behavior to ensure the site looks compliant across various device viewports.

> [!TIP]
> **Semantic Structure**
>
> The codebase utilizes semantic tags (`<header>`, `<section>`, `<footer>`) to improve accessibility and SEO, adhering to modern web standards.

---

<!-- FEATURES -->
<a name="features"></a>
## Features

| Feature | Description |
|---------|-------------|
| **Modern UI/UX** | Clean typography, consistent color palette, and whitespace utilization. |
| **Grid Layout** | CSS Grid and Flexbox used (implicitly or explicitly) for structural alignment. |
| **Responsive Design** | Fluid layouts that adapt to mobile, tablet, and desktop screens. |
| **Pure CSS Implementation** | Styling achieved without reliance on heavy external frameworks. |
| **Asset Optimization** | Fast loading times due to optimized code structure. |

### Tech Stack
- **Languages**: HTML5, CSS3
- **Framework**: None (Vanilla CSS)
- **Deployment**: GitHub Actions (Staging Workflow)
- **Hosting**: GitHub Pages

---

<!-- STRUCTURE -->
<a name="project-structure"></a>
## Project Structure

```python
CLOUD-SERVICES-WEBSITE/
│
├── .github/                         # GitHub Actions & Automation
│   └── workflows/
│       └── deploy.yml               # Automated Staging & Deployment Flow
│
├── docs/                            # Technical Documentation
│   └── SPECIFICATION.md             # Architecture & Design Specification
│
├── Mega/                            # Project Resources & Assets
│   └── Mega.png                     # Author Profile Image
│
├── Source Code/                     # Primary Application Layer
│   ├── css/                         # Stylesheets
│   ├── images/                      # Website Imagery
│   └── index.html                   # Landing Page
│
├── .gitattributes                   # Git configuration
├── CITATION.cff                     # Scholarly Citation Metadata
├── codemeta.json                    # Machine-Readable Project Metadata
├── LICENSE                          # MIT License Terms
├── README.md                        # Comprehensive Archival Entrance
└── SECURITY.md                      # Security Policy & Protocol
```

---

<!-- RESULTS -->
<a name="results"></a>
## Results

<div align="center">
  <b>Landing Page Hero Section</b>
  <br><br>
  <img src="https://user-images.githubusercontent.com/54937357/158046934-63cba9bf-a66b-44da-ade8-b0a1783ebf76.png" alt="Hero Section" width="80%">
  
  <br><br>
  
  <b>Service Offerings</b>
  <br><br>
  <img src="https://user-images.githubusercontent.com/54937357/158046939-0ea82e80-3d8e-4a6b-a3ab-34d55d9d999c.png" alt="Services" width="80%">
  
  <br><br>

  <b>Key Features</b>
  <br><br>
  <img src="https://user-images.githubusercontent.com/54937357/158046955-cdfdb5e8-0ff1-4932-a2be-4dafbea6e69a.png" alt="Features" width="80%">
  
  <br><br>
  
  <b>Pricing & Hosting Plans</b>
  <br><br>
  <img src="https://user-images.githubusercontent.com/54937357/158046959-c6a5cfeb-53db-453b-b77a-d2ad9d9c99fc.png" alt="Hosting Plans" width="80%">

  <br><br>
  
  <b>Site Footer</b>
  <br><br>
  <img src="https://user-images.githubusercontent.com/54937357/158046962-4e25a03d-21be-425a-aebb-11f675c66512.png" alt="Footer" width="80%">
</div>

---

<!-- QUICK START -->
<a name="quick-start"></a>
## Quick Start

### 1. Prerequisites
- **Browser**: Any modern standards-compliant web browser (Chrome, Firefox, Edge, Safari).
- **Environment**: No server-side runtime is required; this is a static client-side application.

> [!WARNING]
> **Local Execution**
>
> While the project can be executed by opening `index.html` directly, certain features may require an active internet connection to resolve external libraries correctly.

### 2. Setup & Deployment
1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Amey-Thakur/CLOUD-SERVICES-WEBSITE.git
    cd CLOUD-SERVICES-WEBSITE
    ```
2.  **Launch**:
    Open `Source Code/index.html` in your preferred browser.

---

<!-- =========================================================================================
                                     USAGE SECTION
     ========================================================================================= -->
## Usage Guidelines

This repository is openly shared to support learning and knowledge exchange across the academic community.

**For Students**  
Use this project as reference material for understanding interactive system design, web development patterns, and Human Machine Interaction principles. The source code is available for study to facilitate self-paced learning and exploration of user-centric design patterns.

**For Educators**  
This project may serve as a practical lab example or supplementary teaching resource for Human Machine Interaction and Human Machine Interaction Laboratory courses (`CSC801` & `CSL801`). Attribution is appreciated when utilizing content.

**For Researchers**  
The documentation and design approach may provide insights into academic project structuring and interactive web application development.

---

<!-- LICENSE -->
<a name="license"></a>
## License

This repository and all its creative and technical assets are made available under the **MIT License**. See the [LICENSE](LICENSE) file for complete terms.

> [!NOTE]
> **Summary**: You are free to share and adapt this content for any purpose, even commercially, as long as you provide appropriate attribution to the original authors.

Copyright © 2022 Amey Thakur & Mega Satish

---

<!-- ABOUT -->
<a name="about-this-repository"></a>
## About This Repository

**Created & Maintained by**: [Amey Thakur](https://github.com/Amey-Thakur) & [Mega Satish](https://github.com/msatmod)  
**Academic Journey**: Bachelor of Engineering in Computer Engineering (2018-2022)  
**Institution**: [Terna Engineering College](https://ternaengg.ac.in/), Navi Mumbai  
**University**: [University of Mumbai](https://mu.ac.in/)

This project features the **Cloud Services Website**, developed as a **Human Machine Interaction** project during the **8th Semester Computer Engineering** curriculum. It represents the application of design principles to create functional web interfaces.

**Connect:** [GitHub](https://github.com/Amey-Thakur) &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/amey-thakur) &nbsp;·&nbsp; [ORCID](https://orcid.org/0000-0001-5644-1575)

### Acknowledgments

Grateful acknowledgment to [**Mega Satish**](https://github.com/msatmod) for her exceptional collaboration and scholarly partnership during the development of this web design project. Her constant support, technical clarity, and dedication to software quality were instrumental in achieving the system's functional objectives. Learning alongside her was a transformative experience; her thoughtful approach to problem-solving and steady encouragement turned complex requirements into meaningful learning moments. This work reflects the growth and insights gained from our side-by-side academic journey. Thank you, Mega, for everything you shared and taught along the way.

Grateful acknowledgment to the faculty members of the **Department of Computer Engineering** at Terna Engineering College for their guidance and instruction in Human Machine Interaction. Their expertise and support helped develop a strong understanding of interactive system design.

Special thanks to the mentors and peers whose encouragement, discussions, and support contributed meaningfully to this learning endeavor.

---

<div align="center">

  [↑ Back to Top](#readme-top)

  [Authors](#authors) &nbsp;·&nbsp; [Overview](#overview) &nbsp;·&nbsp; [Features](#features) &nbsp;·&nbsp; [Structure](#project-structure) &nbsp;·&nbsp; [Results](#results) &nbsp;·&nbsp; [Quick Start](#quick-start) &nbsp;·&nbsp; [Usage Guidelines](#usage-guidelines) &nbsp;·&nbsp; [License](#license) &nbsp;·&nbsp; [About](#about-this-repository) &nbsp;·&nbsp; [Acknowledgments](#acknowledgments)

  <br>

  🔬 **[Human Machine Interaction Laboratory](https://github.com/Amey-Thakur/HUMAN-MACHINE-INTERACTION-AND-HUMAN-MACHINE-INTERACTION-LAB)** &nbsp; · &nbsp; ☁️ **[CLOUD-SERVICES-WEBSITE](https://amey-thakur.github.io/CLOUD-SERVICES-WEBSITE)**

  ---

  ### 🎓 [Computer Engineering Repository](https://github.com/Amey-Thakur/COMPUTER-ENGINEERING)

  **Computer Engineering (B.E.) - University of Mumbai**

  *Semester-wise curriculum, laboratories, projects, and academic notes.*

</div>
