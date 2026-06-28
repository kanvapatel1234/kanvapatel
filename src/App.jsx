import profileImg from './assets/profile.jpg'
import githubImg from './assets/github-white-icon.png'
import './App.css'

const skills = [
   {
    title: 'Programming Languages',
    accent: 'blue',
    icon: '</>',
    items: ['C++', 'Python', 'JavaScript', 'HTML', 'CSS',],
  },
  {
    title: 'Core Concepts',
    accent: 'blue',
    icon: '🖥️',
    items: ['Data Structures','OOPs', 'Operating Systems', 'Machine Learning', 'Deep Learning','Computer Vision','RAG','NLP'],
  },
  {
    title: 'Frameworks & Databases',
    accent: 'green',
    icon: '⚙️',
    items: ['React', 'Node.js', 'Express.js', 'MongoDB', 'FastAPI','PostgreSQL','PyTorch','LangChain'],
  },
  {
    title: 'Tools & Technologies',
    accent: 'purple',
    icon: '🛠️',
    items: ['Git/GitHub','REST API','Huggingface', 'Postman', 'AWS','Redis','Render','CI/CD','LLM API'],
  },
]

const projects = [
  {
    title: 'AI Powered Lecture Assistant',
    description:
      'Transcribes YouTube lectures and generates summaries using transcripts and LLM tools and can download the notes.',
    tags: ['Python', 'FastAPI', 'MongoDB', 'LLM','JWT Auth'],
  },
  {
    title: 'Face Attendance System',
    description:
      'Real-time face recognition attendance system and storing details with FastAPI and MongoDB.',
    tags: ['Python', 'FastAPI', 'MongoDB', 'DL'],
  },
  {
    title: 'Full Stack Phonebook',
    description:
      'A complete phonebook app with authentication and CRUD operations.',
    tags: ['MongoDB', 'Express.js', 'JWT Auth', 'Node.js'],
  },
  {
    title: 'Crop Recommendation System',
    description:
      'Get the suitable crop for the present soil condtion.',
    tags: ['ML', 'FastAPI', 'HTML/CSS/JS'],
  },
  {
    title: 'GO-Pokemon',
    description:
      'Get to know about the Pokemon you want.',
    tags: ['API','HTML/CSS/JS' ],
  },
  {
  title: "Funny JavaScript Games (Click to play)",
  description: (
    <>
      <a
        href="https://hand-cricket-wheat.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#38bdf8", textDecoration: "none" }}
      >
        Hand Cricket
      </a>
      {" | "}
      <a
        href="https://tic-tac-toe-game-tau-lac.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#38bdf8", textDecoration: "none" }}
      >
        Tic-Tac-Toe
      </a>
      {" | "}
      <a
        href="https://snake-water-gun-game-woad.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#38bdf8", textDecoration: "none" }}
      >
        Snake-Water-Gun
      </a>
    </>
  ),
  tags: ["HTML/CSS/JS"],
},
  {
    title: 'Typing speed test',
    description:(
      <>Check your typing speed in words per minute.
      <a
        href="https://typing-test-rho-ten.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#38bdf8", textDecoration: "none" }}
      >
        (click here)
      </a></>),
      
    tags: ['HTML/CSS/JS' ],
  },


]

function App() {
  return (
    <div className="portfolio-shell">
      <nav className="navbar">
        <a className="brand" href="#home">
          Kanva Patel
        </a>
        <div className="nav-links" aria-label="Primary navigation">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="intro">Hi, I'm</p>
            <h1>Kanva Patel</h1>
            <p className="role">
              ___
              <span className="role-rotator" aria-label="Full Stack Developer, AI/ML Enthusiast, Gym Freak, Automobile Enthusiast">
                <span>Full Stack Developer</span>
                <span>AI/ML Enthusiast</span>
                <span>Gym Freak</span>
                <span>Automobile Enthusiast</span>
              </span>
            </p>
            <div className="qualities" aria-label="Highlights">
              <span>Full Stack Developer</span>
              <span>AI/ML Enthusiast</span>
              <span>Gym Freak</span>
              <span>Automobile Enthusiast</span>
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects <span aria-hidden="true"></span>
              </a>
              <a className="button secondary" href="#contact">
                Contact Me <span aria-hidden="true"></span>
              </a>
            </div>
          </div>

          <div className="portrait-wrap" aria-label="Kanva Patel portrait">
            <img src={profileImg} alt="Kanva Patel" />
            <span className="orbit-dot dot-one"></span>
            <span className="orbit-dot dot-two"></span>
            <span className="orbit-dot dot-three"></span>
            <span className="orbit-dot dot-four"></span>
          </div>
        </section>

        <section className="glass-panel about-section" id="about">
          <div className="section-heading left">
            <span className="heading-icon">O</span>
            <h2>About</h2>
          </div>
          <p>
           I am currently studying at BMS College of Engineering (BMSCE), Bengaluru, with a strong interest in Full Stack Development, Backend Engineering, Artificial Intelligence, Machine Learning, Deep Learning, LLM Integration, and Retrieval-Augmented Generation (RAG). I have a decent understanding of Data Structures and Algorithms and enjoy building real-world applications, solving practical problems, and continuously learning modern technologies to improve my skills as a developer.


          </p>
        </section>

        <section className="section-block" id="skills">
          <div className="section-heading center">
            <h2>Skills</h2>
          </div>
          <div className="stack-list">
            {skills.map((group) => (
              <article className={`glass-panel skill-card ${group.accent}`} key={group.title}>
                <div className="card-title">
                  <span>{group.icon}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="chip-list">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="projects">
          <div className="section-heading center">
            <h2>Projects</h2>
          </div>
          <div className="stack-list">
            {projects.map((project, index) => (
              <article className="glass-panel project-card" key={project.title}>
                <div className="project-preview">
                  <span>0{index + 1}</span>
                  <strong>{project.title}</strong>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a
                      className="icon-link"
                      href="https://github.com/kanvapatel1234?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={githubImg} alt="GitHub" className="github-icon" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="contact">
          <div className="section-heading center">
            <h2>Contact</h2>
          </div>
          <div className="contact-grid">
            <div className="glass-panel contact-info">
              <a href="mailto:kanvapateamchi@gmail.com">
                <span>@</span>
                <strong>Email</strong>
                
              </a>
              <a href="https://github.com/kanvapatel1234" target="_blank" rel="noreferrer" className="contact-link">
                <img src={githubImg} alt="GitHub" className="github-icon" />
                <strong>GitHub</strong>
                
              </a>
              <a href="www.linkedin.com/in/kanva-patel-20344531a" target="_blank" rel="noreferrer">
                <span>in</span>
                <strong>LinkedIn</strong>
                
              </a>
            </div>

          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Kanva Patel. All Rights Reserved. This is the portfolio website made using Vite+React</p>
        <a href="#home" aria-label="Back to top">
          ^
        </a>
      </footer>
    </div>
  )
}

export default App
