function handleEnter(event) {
  event.preventDefault(); // Prevent form submission

  var sound = new Audio('https://dl.dropbox.com/scl/fi/1qe12dg998jdt0kt5v3br/ghost-attack.mp3?rlkey=8fdfzkyv3f4qjsfi2w5tubk52&st=umhcac66&dl=0');
  sound.play();

  // Start glitch effect immediately
  document.body.classList.add('digital-glitch');

  // Let the effect last for 4.6s before switching to blackout
  setTimeout(() => {
    document.body.classList.remove('digital-glitch');
    document.querySelector('.container').classList.remove('on');
    document.querySelector('.container').classList.add('off');

    setTimeout(() => {
      document.querySelector('.container').classList.remove('off');
      document.querySelector('.container').classList.add('on');
      
      // AFTER the effect, trigger blackout and redirect
      setTimeout(() => {
        const blackScreen = document.createElement('div');
        blackScreen.style.position = 'fixed';
        blackScreen.style.top = '0';
        blackScreen.style.left = '0';
        blackScreen.style.width = '100%';
        blackScreen.style.height = '100%';
        blackScreen.style.backgroundColor = 'black';
        blackScreen.style.zIndex = '10000';
        blackScreen.style.opacity = '0';
        blackScreen.style.transition = 'opacity 1s';
        document.body.appendChild(blackScreen);

        setTimeout(() => {
          blackScreen.style.opacity = '1';
        }, 10);

        setTimeout(() => {
          window.location.href = 'Library/index.html'; 
        }, 1000);
      }, 1000); // Blackout happens after animation completes

    }, 1000); // Container resets after 1s
  }, 4600); // Glitch effect duration
}

document.getElementById('loginForm').addEventListener('submit', handleEnter);
