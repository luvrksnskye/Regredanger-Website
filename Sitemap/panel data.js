// MAIN JAVASCRIPT, DON'T REMOVE
  const hoverSound = new Audio('https://dl.dropbox.com/scl/fi/whwndenvcuufidm233f7z/hover.wav?rlkey=7yohzu5c9i2uj07r8l4kn377c&st=5n40ekc5&dl=0');
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
          <p>Check out the links on the board to learn about the history of genocide in Palestine and ways to help people. <a href="https://gazafunds.com/">GAZAFUNDS.COM</a> uploads a randomly screened Palestinian fundraiser every update. Please, if this matters to you, consider helping people currently suffering from this genocide and educating yourself about the issue. </p>

<p> IMPORTANT RESOURCES </p>
<p>><a href="https://decolonizepalestine.com/">Decolonizepalestine.</a></p>
<p>><a href="https://bdsmovement.net/Guide-to-BDS-Boycott">Palestinian BDS movement boycotts.</a></p>
<p>><a href="https://apartheid-free.org/">APERTHEID-FREE</a></p>
<p>><a href="https://baitulmaal.org/"> BAITULMAAL</a></p>
<p>><a href="https://donate.doctorswithoutborders.org/"> DOCTORS WITHOUT BORDERS</a></p>
<p>><a href="https://www.instagram.com/palestinianyouthmovement/?hl=en"> Palestinian Youth Movement</a></p>
<p>><a href="https://www.palestineis.org/> Palestine Resource Library</a>
</p>

<p> <a href="https://www.instagram.com/p/CyTsuTgAq-7/?utm_source=ig_web_copy_link"> Why is our community impacted and should we care?</a> </p>
<p>Israel violated 65 United nation resolutions, violated Geneva convention over and over again used chemical weapons on civilians, destroyed more than 500 villages, killed 10000 plus innocents in just 10 years and continued, forced natives of land to become refuges in there own nation, inforced a blockade on them and attacked everyone who come to help them or to provide basic humanitarian aid to innocent kids, women n men.</p>
          `,
          width: 480
      },
      'btn-1': {
          content: `
              <p>SUPPORT THE WHALES</p>
              <p>The transport of methane gas from the United States through the Gulf of California in Mexico puts the lives of whales and thousands of other species at risk, threatens the lives of communities on both sides of the border and contributes to the emission of more greenhouse gases. Many citizens in both Mexico and the United States have asked to stop this project: the construction of the Sierra Madre gas pipeline and the Saguaro Energía liquefied “natural” gas plant in Puerto Libertad. The world demands to leave the fossil era behind and stop sacrificing territories and populations.</p>
              <p> IMPORTANT RESOURCES </p>
              <p>><a href="https://whalesorgas.org/"> Whales or gas</a></p>

<p>><a href="https://www.change.org/p/petition-to-reduce-ship-speeds-around-tahiti-and-moorea-to-protect-humpback-whales?recruiter=1250299535&recruited_by_id=28b209a0-7ffe-11ec -bf48-a59f 5ec3be4e&utm_source=share_petition&utm_campaign=psf_combo_share_initial&utm_term=share_for_starters_page&utm_medium=copylink&utm_content=cl_sharecopy_490261399_en-US%3A8">Petition to Reduce Ship Speeds Around Tahiti and Moorea to Protect Humpback Whales</a></p>
<p>>Non-profit civil association for the conservation of marine biodiversity in Mexico: <a href="https://www.facebook.com/MarNatura.org?mibextid=LQQJ4d&rdid =R7JNI3kUwLoZiSzv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FRJxGSdH7WGXUPYGw%2F%3Fmibextid%3DLQQJ4d#">MARNATURA</a></p>
<p>Sweet Girl was a juvenile humpback whale that died near Tahiti. Her death led to a petition to limit the speed of boats during whale-watching season. The environmental group Mata Tohora captured a video of Sweet Girl crying in pain. Here are some donation resources for whales:</p>
<p>><a href="https://mersociety.org/">Marine Education & Research Society</a></p>
<p> I'll also suggest <a href="https://www.marecet.org/">MareCet.</a> They are an NGO based out of Malaysia, supporting dolphin, dugong, and whale research and policy including population assessments, behavioral studies, and human-wildlife interactions. Note that they partner with <a href="https://wildnet.org/wildlife-programs/dolphins-and-dugongs/">WCN's WildNET</a> for payment processing of donations from US residents (making it tax-deductible ), so for people able to give, you'll be redirected to WildNET and then can choose MareCet to receive the funds -- and it's fully 100% of the money donated (maybe minus the credit card fees).</p>
          `,
          width: 700
      },
      'btn-2': {
          content: `
              <p>LGBTQ+ rights are human rights that protect lesbian, gay, bisexual, transgender, and other people who are not cisgender or heterosexual. These rights include the right to be free from discrimination, the right to marry, and the right to adopt.</p>
              <p> IMPORTANT RESOURCES </p>
              <p>><a href="https://www.equalityfederation.org/">Equality Federation</a></p>
<p>><a href="https://www.hrc.org/">Human Rights Campaign (HRC)</a></p>
<p>><a href="https://www.thetaskforce.org/">National LGBTQ Task Force</a></p>
<p>><a href="https://www.glsen.org/">Gay, Lesbian & Straight Education Network (GLSEN)</a></p>
<p>><a href="https://resumebuilderpro.com/resume-examples/tavausa">Transgender American Veteran's Association</a></p>
<p>><a href="https://transgenderlawcenter.org/"> Transgender Law Center</a></p>
<p>><a href="https://www.transgenderlegal.org/">Transgender Legal Defense & Education Fund</a></p>
<p>Know your rights and protect yourself!</p>
          `,
          width: 400
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
                               <span style= "color: rgb(192, 192, 192); font-family: 'Oxanium', serif;">
                <b style= "font-weight: 600;">C:\site_map</b><br>
                │<br>
                ├──<b style="font-weight: 600;">intro</b> _log-in and warning<br>
                ├──<b style="font-weight: 600;">home</b> _the homepage<br>
                │ ├── <b style="font-weight: 600;">data</b> _infos about me<br>
                │ ├── <b style="font-weight: 600;">updates</b>_update log <br>
                │ ├──  <b style="font-weight: 600;">social</b> _all my social medias<br>
                │ ├──  <b style="font-weight: 600;">credits</b> _infos about Skye<br>
                │ ├──  <b style="font-weight: 600;">support</b> _support and contact<br>
                │ └── <b style="font-weight: 600;">tools</b> _my digital tools<br>
                │<br>
                ├──<b style="font-weight: 600;">blog</b> _personal blog<br>
                │ └── <b style="font-weight: 600;">entries</b> _list of blog entries<br>
                │<br>
                ├──<b style="font-weight: 600;">sitemap</b>_map of all pages (you are here)<br>
                │ └── <b style="font-weight: 600;">_important resources</b><br>
                │<br>
                ├──<b style="font-weight: 600;">services</b>_important data about my services<br>
                │ ├── <b style="font-weight: 600;">_commissions status</b><br>
                │ ├── <b style="font-weight: 600;">_terms of service</b><br>
                │ ├── <b style="font-weight: 600;"> _backend development</b><br>
                │ ├── <b style="font-weight: 600;"> _data analysis </b><br>
                │ └── <b style="font-weight: 600;">_process automotion</b> <br>
                │<br>
                ├── <b style="font-weight: 600;">about</b>_infos about this site<br>
                ├── <b style="font-weight: 600;">resources</b> _useful tools and data<br>
                └── <b style="font-weight: 600;">chat</b> _live digital chat (can be open inside of some pages)<br>
            </span>
              </span>
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
