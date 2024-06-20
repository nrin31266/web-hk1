const sliderVideos = ["Dubai.mp4", "HaLongBay.mp4", "MuCangChai.mp4", "Santo.mp4", "VanLyTT.mp4", 
    "ThuySi.mp4", "Cambo.mp4", "Paris.mp4", "TuCamT.mp4", "Duc.mp4"];

let slider = document.querySelector('.background-video');
let sliderGridItems = [...document.querySelectorAll('.grid-item')];
let currentVideo = 0;

setInterval(() => {
changeSliderVideo();
}, 4000);

const changeSliderVideo = () => {
sliderGridItems.forEach((gridItem, index) => {
setTimeout(() => {
gridItem.classList.remove('hide');

setTimeout(() => {
if (index === sliderGridItems.length - 1) {
  if (currentVideo >= sliderVideos.length - 1) {
      currentVideo = 0;
  } else {
      currentVideo++;
  }

  slider.pause();
  slider.querySelector('source').src = `images/${sliderVideos[currentVideo]}`;
  slider.load();

  slider.addEventListener('loadeddata', () => {
      slider.play();
  }, { once: true });

  sliderGridItems.forEach((item, i) => {
      setTimeout(() => {
          item.classList.add('hide');
      }, i * 100);
  });
}
}, 25);
}, index * 25);
});
};
