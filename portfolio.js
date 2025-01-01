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
    <p>I'm a passionate web developer with experience in JavaScript, HTML, and CSS.</p>
`;

// JS Projects 
projects.innerHTML = `
    <h2>Projects</h2>
    <ul>
        <li>
            <strong>Project 1- JavaScript:</strong> 
            <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">
                <img src="path/to/project1-image.jpg" alt="Project 1 Image" style="width:100px; height:auto;">
            </a>
        </li>
        <li>
            <strong>Project 2 - JavaScript :</strong> 
            <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer">
                <img src="path/to/project2-image.jpg" alt="Project 2 Image" style="width:100px; height:auto;">
            </a>
        </li>
        <li>
            <strong>Project 3 - Python:</strong> 
            <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">
                <img src="path/to/project1-image.jpg" alt="Project 1 Image" style="width:100px; height:auto;">
            </a>
        </li>
        <li>
            <strong>Project 4 Python:</strong> 
            <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">
                <img src="path/to/project1-image.jpg" alt="Project 1 Image" style="width:100px; height:auto;">
            </a>
        </li>
    </ul>
`;



// Skills section
skills.innerHTML = `
    <h2>Skills</h2>
    <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
    </ul>
`;

// Contact section
contact.innerHTML = `
    <h2>Contact</h2>
    <p>Email: duncanbyrne69@outlook.com</p>
    <p>Phone: (123) 456-7890</p>
`;