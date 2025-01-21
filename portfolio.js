// Select DOM elements
const header = document.getElementById('header');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const skills = document.getElementById('skills');
const contact = document.getElementById('contact');

// Header content
header.innerHTML = `
    <h1>Duncan Byrne</h1>
    <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
    </nav>
`;

// About section
about.innerHTML = `
    <h2>About Me</h2>
    <p>Hi, I'm Duncan, a passionate web developer from Long Island, NY. I kicked off my tech career by obtaining a Web Development Certificate from Columbia University, which grounded me in the latest tools and practices of the field.

Following my certification, I took on the role of System Operations Associate at Wells Fargo, where I was part of the support team dedicated to assisting stock traders. This position involved writing Linux scripts and monitoring trades that could potentially cause issues, enhancing my problem-solving capabilities and system reliability in a high-pressure environment.

My passion is deeply rooted in creating projects that tackle real-world problems. I aim to produce solutions that not only work well but also make a significant impact. Whether it's improving user experiences, boosting website performance, or developing applications with a purpose, I'm driven by the challenge of simplifying complex issues.

Beyond coding, I'm always eager to learn new technologies, explore new programming languages, or ideate on my next project that could change the status quo. If you're looking for someone who's committed to making a difference through technology, let's connect and turn our ideas into reality</p>
`;

// JS Projects 
projects.innerHTML = `
    <h2>Projects</h2>
    <ul>
        <li>
            <strong>Project 1- Natural Disaster Data Analysis - Python:
            Click image for GitHub Repo.</strong> 
            <a href="https://github.com/DuncanByrneUT/NaturalDisasterDataAnalysis" target="_blank" rel="noopener noreferrer">
                <img src="images/Screenshot 2025-01-13 at 1.37.11 PM.png" alt="Project 1 Image" style="width:500px; height:auto; display: block; margin-top: 10px;">
            </a>
        </li>
        <li>
            <strong>Project 2 - Dogs and Kanye - JavaScript: Click image for Webpage.</strong> 
            <a href="https://duncanbyrneut.github.io/Dogs-Kanye/" target="_blank" rel="noopener noreferrer">
                <img src="images/Screenshot 2025-01-12 at 8.58.07 PM.png" alt="Project 2 Image" style="width:450px; height:auto; display: block; margin-top: 10px;">
            </a>
        </li>
        <li>
            <strong>Project 3 - Internet Usage Dashboard - Python: Click image for GitHub Repo.</strong> 
            <a href="https://github.com/DuncanByrneUT/Internet-Usage" target="_blank" rel="noopener noreferrer">
                <img src="images/Screenshot 2025-01-14 at 3.57.36 PM.png" alt="Project 1 Image" style="width:450px; height:auto; display: block; margin-top: 10px;">
            </a>
        </li>

`;





// Skills section
skills.innerHTML = `
    <h2>Skills</h2>
    <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>MongDB</li>
        <li>SQL</li>
        <li>React.JS</li>
        <li>Linux</li>
        <li>Git</li>
        <li>GitHub</li>

    </ul>
`;

// Contact section
// <p<a href = "https://github.com/DuncanByrneUT"></a></p>
contact.innerHTML = `
    <h2>Contact</h2>
    <p>Email: duncanbyrne69@outlook.com</p>
    
    <p><a href="https://github.com/DuncanByrneUT">GitHub Profile</a></p>
`;