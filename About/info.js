const sectionContent = {
  status: {
    title: "Agent Status",
    content: `
      <div class="cyberpunk-stats">
        <!-- Header -->
        <div class="stats-header">
          <div class="header-main">
            <h2>AGENT: REGRE</h2>
            <span class="status-badge">ONLINE</span>
          </div>
          <div class="header-sub">
            <span>LVL 18</span>
            <span>CLASS: BACKEND DEVELOPER</span>
            <span>LOCATION: MEX</span>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="stats-grid">
          <!-- Left Column -->
          <div class="stats-column">
            <div class="exp-bar">
              <div class="stat-header">
                <span>EXP</span>
                <span>85%</span>
              </div>
              <div class="progress-bg">
                <div class="progress-fill" data-value="85"></div>
              </div>
            </div>

            <div class="attributes">
              <div class="attribute">
                <div class="stat-header">
                  <span>
                    <span class="material-icons stat-icon">code</span>
                    Coding
                  </span>
                  <span>85/100</span>
                </div>
                <div class="progress-bg">
                  <div class="progress-fill" data-value="85"></div>
                </div>
              </div>

              <div class="attribute">
                <div class="stat-header">
                  <span>
                    <span class="material-icons stat-icon">psychology</span>
                    Learning
                  </span>
                  <span>78/100</span>
                </div>
                <div class="progress-bg">
                  <div class="progress-fill" data-value="78"></div>
                </div>
              </div>

              <div class="attribute">
                <div class="stat-header">
                  <span>
                    <span class="material-icons stat-icon">lightbulb</span>
                    Problem Solving
                  </span>
                  <span>82/100</span>
                </div>
                <div class="progress-bg">
                  <div class="progress-fill" data-value="82"></div>
                </div>
              </div>

              <div class="attribute">
                <div class="stat-header">
                  <span>
                    <span class="material-icons stat-icon">auto_awesome</span>
                    Creativity
                  </span>
                  <span>75/100</span>
                </div>
                <div class="progress-bg">
                  <div class="progress-fill" data-value="75"></div>
                </div>
              </div>
            </div>

            <div class="personal-info">
              <h3>PERSONAL DATA</h3>
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">MBTI:</span>
                  <span class="info-value">ISFJ 9w1</span>
                </div>
                <div class="info-item">
                  <span class="info-label">BIRTHDAY:</span>
                  <span class="info-value">APRIL 21</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="stats-column">
            <div class="languages">
              <h3>LANGUAGE PROTOCOLS</h3>
              <div class="language-section">
                <span class="language-type">SYSTEM:</span>
                <div class="language-tags">
                  <span class="tag">Java</span>
                  <span class="tag">Batch</span>
                  <span class="tag">Python</span>
                  <span class="tag">HTML/CSS</span>
                </div>
              </div>
              <div class="language-section">
                <span class="language-type">HUMAN:</span>
                <div class="language-tags">
                  <span class="tag">Spanish (native)</span>
                  <span class="tag">English (B2)</span>
                  <span class="tag">Russian (A1)</span>
                </div>
              </div>
            </div>

            <div class="preferences">
              <h3>AGENT PREFERENCES</h3>
              <div class="pref-section">
                <span class="pref-type">LIKES:</span>
                <div class="pref-tags">
                  <span class="tag">Coding</span>
                  <span class="tag">Indie videogames</span>
                  <span class="tag">Darkwave music</span>
                  <span class="tag">Learning sciences</span>
                  <span class="tag">Creative writing</span>
                </div>
              </div>
              <div class="pref-section">
                <span class="pref-type">DISLIKES:</span>
                <div class="pref-tags">
                  <span class="tag">Interruptions</span>
                  <span class="tag">Bad Code</span>
                  <span class="tag">Time Waste</span>
                </div>
              </div>
            </div>

            <div class="current-quest">
              <h3>ACTIVE QUEST</h3>
              <div class="quest-box">
                <div class="quest-indicator"></div>
                Building some cool projects
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  coding: {
    title: "SYSTEM PROFICIENCY MATRIX",
    content: `
       <h2>SYSTEM PROFICIENCY MATRIX</h2>
      <div class="cyberpunk-coding-stats">
        <div id="skills-progress-wrapper">
          <div class="progress-dashboard">
            <div class="circle-wrapper linux-wrapper">
              <div class="circle-label">LINUX</div>
              <div class="progress-container">
                <svg class="progress-circle" viewBox="0 0 120 120">
                  <circle class="background" cx="60" cy="60" r="54" stroke-width="12"/>
                  <circle class="progress" cx="60" cy="60" r="54" stroke-width="12" data-value="50"/>
                </svg>
                <span class="percentage">50%</span>
              </div>
            </div>
            <div class="circle-wrapper data-analysis-wrapper">
              <div class="circle-label">DATA ANALYSIS</div>
              <div class="progress-container">
                <svg class="progress-circle" viewBox="0 0 120 120">
                  <circle class="background" cx="60" cy="60" r="54" stroke-width="12"/>
                  <circle class="progress" cx="60" cy="60" r="54" stroke-width="12" data-value="20"/>
                </svg>
                <span class="percentage">20%</span>
              </div>
            </div>
            <div class="circle-wrapper automata-wrapper">
              <div class="circle-label">AUTOMATION</div>
              <div class="progress-container">
                <svg class="progress-circle" viewBox="0 0 120 120">
                  <circle class="background" cx="60" cy="60" r="54" stroke-width="12"/>
                  <circle class="progress" cx="60" cy="60" r="54" stroke-width="12" data-value="36"/>
                </svg>
                <span class="percentage">36%</span>
              </div>
            </div>
            <div class="circle-wrapper programming-wrapper">
              <div class="circle-label">PROGRAMMING</div>
              <div class="progress-container">
                <svg class="progress-circle" viewBox="0 0 120 120">
                  <circle class="background" cx="60" cy="60" r="54" stroke-width="12"/>
                  <circle class="progress" cx="60" cy="60" r="54" stroke-width="12" data-value="85"/>
                </svg>
                <span class="percentage">85%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="coding-details">
          <div class="detail-section">
            <h3>DEVELOPMENT ENVIRONMENT</h3>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="detail-label">PRIMARY OS:</span>
                <span class="detail-value">Windows</span>
                <span class="detail-value">Aspiring to use Debian or Arch Linux in the future!</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">EDITOR:</span>
                <span class="detail-value">VSCode/Eclipse</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">TERMINAL:</span>
                <span class="detail-value">PowerShell</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <h3>ACTIVE PROJECTS</h3>
            <div class="project-grid">
              <div class="project-item">
                <div class="project-status"></div>
                <span class="project-name">Backend API Development</span>
                <span class="project-progress">75%</span>
              </div>
              <div class="project-item">
                <div class="project-status"></div>
                <span class="project-name">Database Optimization</span>
                <span class="project-progress">60%</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <h3>CORE TECH STACK</h3>
            <div class="tech-tags">
              <span class="tech-tag">Java</span>
              <span class="tech-tag">MySQL</span>
              <span class="tech-tag">SQLite3</span>
              <span class="tech-tag">Springboot</span>
              <span class="tech-tag">Git</span>
              <span class="tech-tag">Netbeans</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  about: {
    title: "About me",
    content: [
      "Hello everyone! I go by Regre and I am the webmaster of this site! I'm 17 years old from Mexico. My website (and overall online presence lol) is in English although my native language is Spanish, you can talk to me in either one of them. I go by he/him pronouns. Currently on my 1st year of computer science as a backend developer. I find it extremely difficult to write about who I am. I'm not sure why. I would say I know myself pretty well, but when comes to things like this, I am pretty horrible at it. Hopefully you can get an idea of who I am by exploring my site, which skye made with so much love for me!",
      
      "I love coding so much, so i took it upon myself to learn about it almost during all mi life. It was pretty tricky the first few months, and I still have much to learn, but i am confident enough in my coding skills where I can imagine how I want something and build it from scratch.  I have fallen in love with the process of making new stuff and decorating them to my liking with Skye. So think of my website as a digital journal. I will share bits and pieces of my personal life, interests, passions, and even creations. My goal is simply to have a place on the internet where I can freely be myself without the chaos and limitations of social media. And to have fun, of course!",
      
      "Despite being a bit introverted, I am pretty friendly and love to interact with other people, so y'all can contact me to talk me about whatever, really! whether it be to tell me about what you thought about my site, to send me pictures of your cats, recommend me an album you think I might like, or even ask any coding/backend related questions u might have. I might take a bit to answer back but anything goes, thank you very much for reading! I am currently limited in resources but I always do my best to code and dedicate myself to this, I constantly strive to always get ahead, despite the difficulties around me. In the future I would like to learn frontend, but for now I am dedicated to backend and that is what I consider myself best at!",
      
      {
        subtitle: "MY CODING STORY",
        text: "My journey into coding began when I was quite young, fascinated by how video games and tech worked. As time went on, I discovered the power of Java and began diving deeper into backend development. The real turning point came when I started building my own projects from scratch. Every error message, every debugging session, and every successful deployment taught me something new. Now, as a backend developer, I've learned to appreciate the architecture that powers web applications. I spend my days working with databases, APIs, and server-side logic, constantly learning and improving. What I love most about backend development is how it challenges me to think systematically and solve complex problems. Every day brings new challenges and opportunities to learn, and that's exactly what keeps me excited about coding. Through all the ups and downs, the late-night debugging sessions, and the victories of doing something work, I've discovered that backend development isn't just what I do - it's who I am."
      }
    ]
  },
  favs: {
    title: "AGENT PREFERENCES DATABASE",
    sections: {
      digital: {
        title: "DIGITAL REALM",
        items: [
          { label: "Programming Language", value: "Java", percentage: 95 },
          { label: "IDE", value: "VSCode/Eclipse", percentage: 90 },
          { label: "Game Genre", value: "Indie Games", percentage: 85 },
          { label: "OS", value: "Windows", percentage: 80 }
        ]
      },
      entertainment: {
        title: "ENTERTAINMENT",
        items: [
          { label: "Music Genre", value: "Darkwave", percentage: 92 },
          { label: "Activity", value: "Coding", percentage: 88 },
          { label: "Learning", value: "Sciences", percentage: 85 },
          { label: "Hobby", value: "Creative Writing", percentage: 82 }
        ]
      },
      inspirations: {
        title: "CURRENT INSPIRATIONS",
        categories: [
          { type: "Games", tags: ["Undertale", "OMORI", "Cyberpunk 2077"] },
          { type: "Music", tags: ["Crystal Castles", "Sidewalks and Skeletons", "Mr.Kitty", "Chase Atlantic", "Pastel Ghost"] },
          { type: "Others", tags: ["Winter", "Cats", "Plants", "Flowers"] },
          { type: "Learning", tags: ["Backend Dev", "Computer Science", "Math", "Astronomy", "Astrophysics"] }
        ]
    }
  }

  },
  needs:{
  title: "SYSTEM REQUIREMENTS UPDATE",
  content: `
    <div class="rg-needs-container">
    <h2>SYSTEM LIMITATIONS</h2>
      <!-- Personal Message -->
      <div class="rg-needs-message">
        <p>I currently work with limited resources, including an AMD A4-9125 laptop with 4GB RAM, which affects my ability to handle more demanding tasks efficiently. While I strive to improve my skills and develop high-quality projects, I can't yet afford high-end equipment, premium tools, or advanced courses.</p>
        <p>Despite these limitations, I'm fully committed to learning and creating, using every available resource to grow as a developer. Any support, whether through collaboration, opportunities, or guidance, is greatly appreciated as I work toward expanding my capabilities.</p>
      </div>

      <!-- Status Overview -->
      <div class="rg-needs-header">
        <h1>SYSTEM REQUIREMENTS UPDATE</h1>
        <div class="rg-status-indicator">
          <span class="rg-status-dot"></span>
          <span class="rg-status-text">Current Environment Status: SUBOPTIMAL</span>
        </div>
      </div>

      <!-- Main Grid -->
      <div class="rg-needs-grid">
        <!-- Current Hardware -->
        <div class="rg-needs-section">
          <h3>CURRENT HARDWARE</h3>
          <div class="rg-specs-list">
            <div class="rg-spec-item">
              <span class="rg-spec-label">CPU</span>
              <span class="rg-spec-value">AMD A4-9125</span>
            </div>
            <div class="rg-spec-item">
              <span class="rg-spec-label">RAM</span>
              <span class="rg-spec-value">4GB DDR4</span>
            </div>
            <div class="rg-spec-item">
              <span class="rg-spec-label">Storage</span>
              <span class="rg-spec-value">2059 MB</span>
            </div>
            <div class="rg-spec-item">
              <span class="rg-spec-label">GPU</span>
              <span class="rg-spec-value"> AMD Radeon™ R3 Graphics</span>
            </div>
          </div>
        </div>

        <!-- Target Hardware -->
        <div class="rg-needs-section">
          <h3>TARGET SPECIFICATIONS</h3>
          <div class="rg-specs-list">
            <div class="rg-spec-item rg-target">
              <span class="rg-spec-label">CPU</span>
              <span class="rg-spec-value">Unknown</span>
            </div>
            <div class="rg-spec-item rg-target">
              <span class="rg-spec-label">RAM</span>
              <span class="rg-spec-value">Unknown</span>
            </div>
            <div class="rg-spec-item rg-target">
              <span class="rg-spec-label">Storage</span>
              <span class="rg-spec-value">Unknown</span>
            </div>
            <div class="rg-spec-item rg-target">
              <span class="rg-spec-label">GPU</span>
              <span class="rg-spec-value">Unknown</span>
            </div>
          </div>
        </div>

        <!-- Development Limitations -->
        <div class="rg-needs-section">
          <h3>DEVELOPMENT LIMITATIONS</h3>
          <ul class="rg-limitations-list">
            <li>Limited database processing capacity</li>
            <li>RAM restrictions for running multiple services</li>
            <li>Slower compilation and build times</li>
            <li>Restricted concurrent development capabilities</li>
          </ul>
        </div>

        <!-- Upgrade Progress -->
        <div class="rg-needs-section">
          <h3>UPGRADE PROGRESS</h3>
          <div class="rg-progress-tracks">
            <div class="rg-progress-item">
              <div class="rg-progress-header">
                <span>Savings Progress</span>
                <span>45%</span>
              </div>
              <div class="rg-progress-bar">
                <div class="rg-progress-fill" data-value="45"></div>
              </div>
            </div>
            <div class="rg-progress-item">
              <div class="rg-progress-header">
                <span>Research Complete</span>
                <span>90%</span>
              </div>
              <div class="rg-progress-bar">
                <div class="rg-progress-fill" data-value="90"></div>
              </div>
            </div>
            <div class="rg-progress-item">
              <div class="rg-progress-header">
                <span>Overall Progress</span>
                <span>60%</span>
              </div>
              <div class="rg-progress-bar">
                <div class="rg-progress-fill" data-value="60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}
};


function createPreferencesList(items) {
  return items.map(item => `
    <div class="rgre-preference-item">
      <div class="rgre-preference-header">
        <span>${item.label}</span>
        <span>${item.value}</span>
      </div>
      <div class="rgre-progress-bar">
        <div class="rgre-progress-fill" data-percentage="${item.percentage}"></div>
      </div>
    </div>
  `).join('');
}

function createInspirationsList(categories) {
  return categories.map(category => `
    <div class="rgre-inspiration-category">
      <span class="rgre-category-type">${category.type}</span>
      <div class="rgre-tags-container">
        ${category.tags.map(tag => `<span class="rgre-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function initializeProgressCircles() {
  const circles = document.querySelectorAll('.progress-circle');
  
  circles.forEach(svg => {
    const circle = svg.querySelector('.progress');
    const percentage = svg.parentElement.querySelector('.percentage');
    const value = parseInt(circle.getAttribute('data-value'));
    
    const radius = circle.getAttribute('r');
    const circumference = 2 * Math.PI * radius;
    
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    setTimeout(() => {
      const offset = circumference - (value / 100) * circumference;
      circle.style.strokeDashoffset = offset;
      
      let currentValue = 0;
      const duration = 1500;
      const steps = duration / 16;
      const increment = value / steps;
      
      const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= value) {
          currentValue = value;
          clearInterval(counter);
        }
        percentage.textContent = `${Math.round(currentValue)}%`;
      }, 16);
    }, 100);
  });
}

function updateContent(section) {
  const blogContent = document.getElementById('blog-content');
  const content = sectionContent[section];

  if (!content) return;

  let contentHTML = `<div class="my-post">`;

  if (section === 'status' || section === 'coding' || section === 'needs') {
    contentHTML += content.content;
  } else if (section === 'favs') {
    contentHTML += `
      <div class="rgre-favorites-container">
        <div class="rgre-favorites-header">
          <h2>${content.title}</h2>
          <div class="rgre-status-indicator">
            <div class="rgre-status-dot"></div>
            <span>SYSTEM ACTIVE</span>
          </div>
        </div>
        <div class="rgre-favorites-grid">
          <div class="rgre-favorites-section">
            <h3>${content.sections.digital.title}</h3>
            <div class="rgre-preferences-list">
              ${createPreferencesList(content.sections.digital.items)}
            </div>
          </div>
          <div class="rgre-favorites-section">
            <h3>${content.sections.entertainment.title}</h3>
            <div class="rgre-preferences-list">
              ${createPreferencesList(content.sections.entertainment.items)}
            </div>
          </div>
        </div>
        <div class="rgre-favorites-section">
          <h3>${content.sections.inspirations.title}</h3>
          <div class="rgre-inspirations-list">
            ${createInspirationsList(content.sections.inspirations.categories)}
          </div>
        </div>
      </div>
    `;
  } else {
    contentHTML += `<h2>${content.title}</h2>`;
    if (Array.isArray(content.content)) {
      content.content.forEach(item => {
        if (typeof item === 'string') {
          contentHTML += `<p>${item}</p>`;
        } else if (item.subtitle && item.text) {
          contentHTML += `
            <h3 style="font-family: 'Orbitron', sans-serif; color: white; text-transform: uppercase;">${item.subtitle}</h3>
            <p>${item.text}</p>`;
        }
      });
    } else {
      contentHTML += `<p>${content.content}</p>`;
    }
  }

  contentHTML += '</div>';
  blogContent.innerHTML = contentHTML;

  // Initialize appropriate animations based on section
  if (section === 'status' || section === 'needs') {
    setTimeout(() => {
      document.querySelectorAll('.progress-fill, .rg-progress-fill').forEach(bar => {
        const value = bar.getAttribute('data-value') || bar.getAttribute('data-percentage');
        bar.style.width = `${value}%`;
      });
    }, 100);
  } else if (section === 'coding') {
    setTimeout(initializeProgressCircles, 100);
  } else if (section === 'favs') {
    setTimeout(() => {
      document.querySelectorAll('.rgre-progress-fill').forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = `${percentage}%`;
      });
    }, 100);
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  updateContent('about');

  const sidebarLinks = {
    'side-nitro': 'about',
    'side-int': 'status',
    'side-know': 'coding',
    'side-needs': 'needs',
    'side-regre': 'favs'
  };

  Object.entries(sidebarLinks).forEach(([id, section]) => {
    const link = document.getElementById(id);
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        updateContent(section);
      });
    }
  });

  const hoverSound = document.getElementById('hover-sound');
  document.querySelectorAll('.s').forEach(link => {
    link.addEventListener('mouseenter', () => {
      if (hoverSound) {
        hoverSound.currentTime = 0;
        hoverSound.play();
      }
    });
  });
});

// Add the CSS styles
const styles = `
.cyberpunk-stats {
  width: 100%;
  max-width: 800px;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.42);
  color: rgb(255, 255, 255);
  font-family: "Oxanium", serif;
  border-radius: 0.5rem;
  border: 1px solid rgba(209, 79, 79, 0.5);
  box-shadow: 0 0 20px rgba(209, 79, 79, 0.2);
  margin: 0 auto;
  backdrop-filter: blur(10px);
}

.stats-header {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(209, 79, 79, 0.3);
  padding-bottom: 1rem;
}

.header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-main h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(209, 79, 79);
  text-shadow: 0 0 10px rgba(209, 79, 79, 0.5);
}

.status-badge {
  padding: 0.25rem 0.75rem;
  background: rgba(209, 79, 79, 0.2);
  border-radius: 0.25rem;
  animation: pulse 2s infinite;
}

.header-sub {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  font-size: 0.875rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.stats-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.exp-bar, .attribute {
  margin-bottom: 0.75rem;
}

.stat-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
}

.stat-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}

.progress-bg {
  width: 100%;
  height: 0.375rem;
  background: rgba(209, 79, 79, 0.1);
  border-radius: 9999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, rgb(209, 79, 79), rgb(237, 99, 99));
  border-radius: 9999px;
  width: 0;
  transition: width 1s ease-out;
}

.languages h3, 
.current-quest h3, 
.preferences h3,
.personal-info h3 {
  color: rgb(209, 79, 79);
  margin-bottom: 0.5rem;
  font-size: 1rem;
  text-shadow: 0 0 10px rgba(209, 79, 79, 0.5);
}

.language-section,
.pref-section {
  margin-bottom: 0.75rem;
}

.language-type,
.pref-type {
  font-size: 0.875rem;
  color: rgb(209, 79, 79);
}

.language-tags,
.pref-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.tag {
  padding: 0.25rem 0.5rem;
  background: rgba(209, 79, 79, 0.2);
  border-radius: 0.25rem;
  font-size: 0.75rem;
  border: 1px solid rgba(209, 79, 79, 0.3);
}

.quest-box {
  padding: 0.75rem;
  background: rgba(209, 79, 79, 0.1);
  border: 1px solid rgba(209, 79, 79, 0.3);
  border-radius: 0.25rem;
  position: relative;
  padding-left: 1.5rem;
}

.quest-indicator {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0.5rem;
  height: 0.5rem;
  background: rgb(209, 79, 79);
  border-radius: 50%;
  animation: pulse 2s infinite;
  box-shadow: 0 0 10px rgba(209, 79, 79, 0.5);
}

.personal-info {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(209, 79, 79, 0.1);
  border: 1px solid rgba(209, 79, 79, 0.3);
  border-radius: 0.25rem;
}

.info-grid {
  display: grid;
  gap: 0.5rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-label {
  color: rgb(209, 79, 79);
  font-size: 0.875rem;
}

.info-value {
  font-size: 0.875rem;
}

.preferences {
  margin: 1rem 0;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

/* Font */
p {
  font-family: "Oxanium", serif;
}

/* Coding Stats Specific Styles */
.cyberpunk-coding-stats {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.42);
  color: rgb(255, 255, 255);
  font-family: "Oxanium", serif;
  border-radius: 0.5rem;
  border: 1px solid rgba(209, 79, 79, 0.5);
  box-shadow: 0 0 20px rgba(209, 79, 79, 0.2);
  backdrop-filter: blur(10px);
}

.coding-details {
  margin-top: 2rem;
}

.detail-section {
  margin-bottom: 1.5rem;
}

.detail-section h3 {
  color: rgb(209, 79, 79);
  margin-bottom: 1rem;
  font-size: 1rem;
  text-shadow: 0 0 10px rgba(209, 79, 79, 0.5);
}

.detail-grid {
  display: grid;
  gap: 0.75rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: rgba(209, 79, 79, 0.1);
  border-radius: 0.25rem;
}

.detail-label {
  color: rgb(209, 79, 79);
  font-size: 0.875rem;
}

.project-grid {
  display: grid;
  gap: 0.75rem;
}

.project-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: rgba(209, 79, 79, 0.1);
  border-radius: 0.25rem;
}

.project-status {
  width: 0.5rem;
  height: 0.5rem;
  background: rgb(209, 79, 79);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.project-name {
  flex: 1;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(209, 79, 79, 0.2);
  border: 1px solid rgba(209, 79, 79, 0.3);
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

#skills-progress-wrapper {
  background: rgba(209, 79, 79, 0.1);
  border-radius: 0.75rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.progress-dashboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.circle-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.circle-label {
  font-size: 0.875rem;
  color: rgb(209, 79, 79);
  text-shadow: 0 0 10px rgba(209, 79, 79, 0.5);
}

.progress-container {
  position: relative;
  width: 120px;
  height: 120px;
}

.progress-circle {
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
}

.progress-circle circle {
  fill: none;
  stroke-linecap: round;
}

.progress-circle .background {
  stroke: rgba(209, 79, 79, 0.1);
}

.progress-circle .progress {
  stroke: rgb(209, 79, 79);
  transition: stroke-dasharray 1.5s ease-in-out;
}

.percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.25rem;
  font-weight: bold;
  color: rgb(209, 79, 79);
}

/* Responsive Design */
@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .header-sub {
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .cyberpunk-stats {
    padding: 1rem;
  }

  .language-tags,
  .pref-tags {
    flex-direction: column;
    gap: 0.25rem;
  }

  .progress-dashboard {
    gap: 1rem;
  }

  .progress-container {
    width: 100px;
    height: 100px;
  }

  .percentage {
    font-size: 1rem;
  }
}
.rg-needs-container {
  width: 100%;
  max-width: 800px;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.42);
  color: rgb(255, 255, 255);
  font-family: "Oxanium", serif;
  border-radius: 0.5rem;
  border: 1px solid rgba(209, 79, 79, 0.5);
  box-shadow: 0 0 20px rgba(209, 79, 79, 0.2);
  margin: 0 auto;
  backdrop-filter: blur(10px);
}

.rg-needs-message {
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(209, 79, 79, 0.1);
  border: 1px solid rgba(209, 79, 79, 0.3);
  border-radius: 0.5rem;
  line-height: 1.6;
}

.rg-needs-message p {
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.rg-needs-message p:last-child {
  margin-bottom: 0;
}

.rg-needs-header {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(209, 79, 79, 0.3);
  padding-bottom: 1rem;
}

.rg-needs-header h2 {
  color: rgb(209, 79, 79);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(209, 79, 79, 0.5);
}

.rg-status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rg-status-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: rgb(209, 79, 79);
  border-radius: 50%;
  animation: rgPulse 2s infinite;
}

@keyframes rgPulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.rg-status-text {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.rg-needs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.rg-needs-section {
  background: rgba(209, 79, 79, 0.1);
  border: 1px solid rgba(209, 79, 79, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
}

.rg-needs-section h3 {
  color: rgb(209, 79, 79);
  font-size: 1rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(209, 79, 79, 0.5);
}

.rg-specs-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.rg-spec-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: rgba(209, 79, 79, 0.1);
  border-radius: 0.25rem;
}

.rg-spec-item.rg-target .rg-spec-value {
  color: rgb(255, 98, 119);
}

.rg-spec-label {
  color: rgb(209, 79, 79);
  font-size: 0.875rem;
}

.rg-limitations-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.rg-limitations-list li {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: rgba(209, 79, 79, 0.1);
  border-radius: 0.25rem;
  font-size: 0.875rem;
  position: relative;
  padding-left: 1.5rem;
}

.rg-limitations-list li::before {
  content: "";
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0.5rem;
  height: 0.5rem;
  background: rgb(209, 79, 79);
  border-radius: 50%;
}

.rg-progress-tracks {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.rg-progress-item {
  width: 100%;
}

.rg-progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.rg-progress-bar {
  width: 100%;
  height: 0.375rem;
  background: rgba(209, 79, 79, 0.1);
  border-radius: 9999px;
  overflow: hidden;
}

.rg-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, rgb(209, 79, 79), rgb(237, 99, 99));
  border-radius: 9999px;
  width: 0;
  transition: width 1s ease-out;
}

@media (max-width: 640px) {
  .rg-needs-grid {
    grid-template-columns: 1fr;
  }
  
  .rg-needs-section {
    padding: 0.75rem;
  }
  
  .rg-needs-message {
    padding: 0.75rem;
  }
}
.rgre-favorites-container {
  width: 100%;
  max-width: 800px;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.42);
  color: rgb(255, 255, 255);
  font-family: "Oxanium", serif;
  border-radius: 0.5rem;
  border: 1px solid rgba(209, 79, 79, 0.5);
  box-shadow: 0 0 20px rgba(209, 79, 79, 0.2);
  margin: 0 auto;
  backdrop-filter: blur(10px);
}

.rgre-favorites-header {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(209, 79, 79, 0.3);
  padding-bottom: 1rem;
}

.rgre-favorites-header h2 {
  color: rgb(209, 79, 79);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(209, 79, 79, 0.5);
}

.rgre-status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rgre-status-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: rgb(209, 79, 79);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.rgre-favorites-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.rgre-favorites-section {
  background: rgba(209, 79, 79, 0.1);
  border: 1px solid rgba(209, 79, 79, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
}

.rgre-favorites-section h3 {
  color: rgb(209, 79, 79);
  font-size: 1rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(209, 79, 79, 0.5);
}

.rgre-preferences-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.rgre-preference-item {
  background: rgba(209, 79, 79, 0.1);
  border-radius: 0.25rem;
  padding: 0.75rem;
}

.rgre-preference-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.rgre-progress-bar {
  width: 100%;
  height: 0.375rem;
  background: rgba(209, 79, 79, 0.1);
  border-radius: 9999px;
  overflow: hidden;
}

.rgre-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, rgb(209, 79, 79), rgb(237, 99, 99));
  border-radius: 9999px;
  width: 0;
  transition: width 1s ease-out;
}

.rgre-inspirations-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.rgre-inspiration-category {
  margin-bottom: 1rem;
}

.rgre-category-type {
  color: rgb(209, 79, 79);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.rgre-tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.rgre-tag {
  padding: 0.25rem 0.5rem;
  background: rgba(209, 79, 79, 0.2);
  border: 1px solid rgba(209, 79, 79, 0.3);
  border-radius: 0.25rem;
  font-size: 0.75rem;
}

@media (max-width: 640px) {
  .rgre-favorites-grid {
    grid-template-columns: 1fr;
  }
  
  .rgre-favorites-container {
    padding: 1rem;
  }
  
  .rgre-favorites-section {
    padding: 0.75rem;
  }
}

`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
console.log('Styles added to the document'); // Debugging line