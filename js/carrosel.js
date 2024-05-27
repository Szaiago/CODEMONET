const Carousel = {
    img: document.querySelectorAll('#imgs img'),
    imgs: document.getElementById('imgs'),
    leftBtn: document.getElementById('left'),
    rightBtn: document.getElementById('right'),
  
    index: 0,
    interval: '',
    intervalTime: 2000,
  
    run() {
      Carousel.index++
      Carousel.changeImage()
    },
  
    slide(direction) {
      direction ? Carousel.index++ : Carousel.index--
      Carousel.changeImage()
      Carousel.resetInterval()
    },
  
    resetInterval() {
      clearInterval(Carousel.interval)
      Carousel.interval = setInterval(Carousel.run, 2000)
    },
  
    changeImage() {
      if (Carousel.index > Carousel.img.length - 1) {
        Carousel.index = 0
      } else if (Carousel.index < 0) {
        Carousel.index = Carousel.img.length - 1
      }
    
      Carousel.imgs.style.transform = `translateX(${-Carousel.index * 500}px)`
    },
  
    start() {
      Carousel.interval = setInterval(Carousel.run, Carousel.intervalTime)
      Carousel.leftBtn.addEventListener('click', () => Carousel.slide(false))
      Carousel.rightBtn.addEventListener('click', () => Carousel.slide(true))
    }
  }
  
  Carousel.start()