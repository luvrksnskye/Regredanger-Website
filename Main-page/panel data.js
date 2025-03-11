// MAIN JAVASCRIPT, DON'T REMOVE
  const hoverSound = new Audio('../assets/background and visuals/hover.wav');
  hoverSound.volume = 0.4; // Set volume to 20% to avoid being too loud

  // hover sound to all buttons
  const buttons = document.querySelectorAll('.options button');
  buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
          hoverSound.currentTime = 0; // Reset sound to start
          hoverSound.play();
      });
  });

  const contentData = {
      'btn-0': {
          content: `
              <p>DATA INFORMATION</p>
              <p>Name: Regre</p>
              <p>Age: 18</p>
              <p>Location: MEXICO</p>
              <p>Occupation: Student & Developer</p>
              <p>Specialization: Backend Development, Data Analysis</p>
          `,
          width: 600
      },
      'btn-1': {
          content: `
              <p>SUPPORT INFORMATION</p>
              <p>Email: carlosemiliogranadaperez@gmail.com</p>
              <p>Discord: <a href="https://discordapp.com/users/461250795749507090" target="_blank">@RegreDanger</a></p>

              <p>Available for freelance work and collaborations. If you need to contact me for a specific commission, you can do so through this email or my discord account. You can also contact me in the chat on this website!</p>
          `,
          width: 550
      },
      'btn-2': {
          content: `
              <p>CREDITS</p>
              <p>Website design and development: <a href="https://luvrksknskyejourney.org/" target="_blank">Skye Journey</a>. If you need to contact Skye, their discord is right here: <a href="https://discordapp.com/users/645030135346495508" target="_blank">@Skye</a></p>
              <p>Music: Cyberpunk 2077 OST by CD Projekt Red, Call of Duty: Modern Warfare 2 by Infinity Ward</p>
              <p>Coded in Visual Studio Code</p>
              <p>Assets and icons: Google icons</p>
              <p>Chat used: Cbox</p>
              <p> Sound effects from mixkit</p>
              <p>Framework used: React </p>
          `,
          width: 500
      },
      'btn-3': {
          content: `
              <p>DEVELOPMENT TOOLS</p>
              <p>Languages: Python, VBA, Java, C#, C++, Batchfile</p>
              <p>Tools: Git, Windows, MySQL, SQLite3, Springboot, Eclipse, Netbeans, Visual Studio Code</p>
          `,
          width: 575
      },
      'btn-4': {
          content: `
              <p>MY SOCIAL MEDIA</p>
              <p> > Instagram: <a href="https://www.youtube.com/@regredanger6389?si=KlDg4zcrb8yRaaEy" target="_blank">@Regre.Dev</a> </p>
              <p> > Youtube: <a href="https://www.youtube.com/@regredanger6389?si=KlDg4zcrb8yRaaEy" target="_blank">@RegreDanger</a></p>
              <p> > Twitter (X): <a href="https://x.com/Regrett2104" target="_blank">@Regrett</a> </p>
          `,
          width: 575
      },
      'btn-5': {
          content: `
              <div class="update-log-container">
                  <div class="update-log">
                      <div class="update-item">
                          <span class="arrow left-right">></span>
                          <span class="date">2025-01-24</span>
                          <span class="description">Initial website launch</span>
                      </div>
                      <div class="update-item">
                          <span class="arrow left-right">></span>
                          <span class="date">2025-01-25</span>
                          <span class="description">Added hover sound effects</span>
                      </div>
                      <div class="update-item">
                          <span class="arrow left-right">></span>
                          <span class="date">2025-01-25</span>
                          <span class="description">Implemented responsive design</span>
                      </div>
                      <div class="update-item">
                          <span class="arrow left-right">></span>
                          <span class="date">2025-01-25</span>
                          <span class="description">Main page finished</span>
                      </div>
                      <div class="update-item">
                          <span class="arrow left-right">></span>
                          <span class="date">2025-01-25</span>
                          <span class="description">Optimized performance</span>
                      </div>
                      <div class="update-item">
                          <span class="arrow left-right">></span>
                          <span class="date">2025-01-25</span>
                          <span class="description">More music added!</span>
                      </div>
                      <div class="update-item">
                    <span class="arrow left-right">></span>
                    <span class="date">2025-01-25</span>
                   <span class="description">Page statistics added for user</span>
                        </div>
                    <div class="update-item">
                <span class="arrow left-right">></span>
       <span class="date">2025-01-25</span>
            <span class="description">New interactive features added. Sitemap in progress.</span>
             </div>
                  <div class="update-item">
                <span class="arrow left-right">></span>
       <span class="date">2025-01-25</span>
            <span class="description">Chat added!</span>
             </div>
                  </div>
              </div>
          `,
          width: 600
      }
  };

  let activeButton = null;

  function setAnim(button) {
      const shot = document.getElementById('shot');
      const component = document.getElementById('component');
      const card = document.querySelector('.card');
      
      // Remove active class from previous button
      if (activeButton) {
          activeButton.classList.remove('active');
      }

      // If clicking the same button, reset to default
      if (activeButton === button) {
          shot.style.width = '400px';
          card.style.width = '100%';
          component.style.opacity = '0';
          setTimeout(() => {
              component.innerHTML = `
                  <p>Hello everyone.</p>
                  <p>I'm RegreDanger, a 17-year-old dev driven by a love for tech and hands-on building! I'm a programming enthusiast with a passion for coding and the determination to achieve my goals and complete my projects. I love automating processes as much as I enjoy building on the server side!</p>
                  <p>I am currently studying a major in Technical Informatics.</p>
                  <p>You can check out my most recent projects here and on github.</p>
              `;
              component.style.opacity = '1';
          }, 300);
          activeButton = null;
          return;
      }

      // Add active class to current button
      button.classList.add('active');
      activeButton = button;

      // Animate content change
      component.style.opacity = '0';
      
      setTimeout(() => {
          shot.style.width = contentData[button.id].width + 'px';
          card.style.width = '100%';
          component.innerHTML = contentData[button.id].content;
          component.style.opacity = '1';
      }, 300);
  }

  // Add CSS for update log
  const style = document.createElement('style');
  style.textContent = `
      .update-log-container {
          max-height: 250px;
          overflow-y: auto;
          border-radius: 8px;
          padding: 10px;
          color: white;
      }

      .update-log {
          display: flex;
          flex-direction: column;
      }

      .update-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          position: relative;
      }

      .arrow {
          margin-right: 10px;
          color:rgb(255, 255, 255);
          animation: moveLeftRight 1s ease-in-out infinite;
          display: inline-block;
      }

      .date {
          margin-right: 15px;
          color:rgb(160, 1, 1);
          min-width: 100px;
      }

      .description {
          color: #e0e0e0;
      }

      @keyframes moveLeftRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
      }

      /* Scrollbar styling */
      .update-log-container::-webkit-scrollbar {
          width: 8px;
      }

      .update-log-container::-webkit-scrollbar-track {
          background:rgba(42, 42, 42, 0.3);
      }

      .update-log-container::-webkit-scrollbar-thumb {
          background:rgb(139, 0, 0);
          border-radius: 4px;
      }

      .update-log-container::-webkit-scrollbar-thumb:hover {
          background:rgb(87, 0, 0);
      }
  `;
  document.head.appendChild(style);
