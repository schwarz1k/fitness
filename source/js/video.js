document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.querySelector('.about__play-button');
  const buttonHolder = document.querySelector('.about__play-button-holder');
  const buttonStart = document.querySelector('.about__play-button-start');

  playButton.addEventListener('click', () => {
    const videoContainer = document.querySelector('.about__video-container');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=1';
    iframe.width = 320;
    iframe.height = 170;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';

    const screenWidth = window.innerWidth;

    if (screenWidth >= 1366) {
      iframe.width = '360';
      iframe.height = '230';
    } else if (screenWidth >= 768) {
      iframe.width = '100%';
      iframe.height = '170';
    } else {
      iframe.width = '100%';
      iframe.height = '170';
    }

    videoContainer.appendChild(iframe);
    playButton.style.display = 'none';
    buttonHolder.style.display = 'none';
    buttonStart.style.display = 'none';
  });
});
