// Select DOM elements
const header = document.getElementById('header');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const skills = document.getElementById('skills');
const contact = document.getElementById('contact');

// Header content
header.innerHTML = `
    <h1>John Doe</h1>
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

// Projects section
projects.innerHTML = `
    <h2>Projects</h2>
    <ul>
        <li><strong>Project 1:</strong> Description</li>
        <li><strong>Project 2:</strong> Description</li>
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
    <p>Email: john.doe@example.com</p>
    <p>Phone: (123) 456-7890</p>
`;