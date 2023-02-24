const loadingCircle = document.querySelector(".loading-wrap");

window.addEventListener('load', ()=>{
  loadingCircle.classList.add("hidden");
});

//배너 슬라이드

let bannerWrapper = document.querySelector(".banner"),
  bannerContainer = bannerWrapper.querySelector(".banner-container"),
  slides = bannerContainer.querySelectorAll("li"),
  slideCount = slides.length,
  currentIndex = 0,
  timer,
  navPrev = bannerWrapper.querySelector("#prev"),
  navNext = bannerWrapper.querySelector("#next");

  for (let i = 0; i < slideCount; i++) {
    slides[i].style.left = i * 100 + "%";
  }

function goToSlide(idx) {
  bannerContainer.style.left = idx * -100 + "%";
  currentIndex = idx;

  for (sl of slides) {
    sl.classList.remove("active");
  }

  slides[currentIndex].classList.add("active");

  if (currentIndex == slideCount - 1) {
    navNext.classList.add("disabled");
  } else {
    navNext.classList.remove("disabled");
  }

  if (currentIndex == 0) {
    navPrev.classList.add("disabled");
  } else {
    navPrev.classList.remove("disabled");
  }
}

goToSlide(0);

navNext.addEventListener("click", function (e) {
  e.preventDefault();

  if (currentIndex != slideCount - 1) {
    goToSlide(currentIndex + 1);
  }
});
navPrev.addEventListener("click", function (e) {
  e.preventDefault();

  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
  }
});

function startAutoSlide() {
  timer = setInterval(function () {
    let nextSlide = (currentIndex + 1) % slideCount;
    goToSlide(nextSlide);
  }, 3000);
}

startAutoSlide();

bannerWrapper.addEventListener("mouseover", function () {
  clearInterval(timer);
});
bannerWrapper.addEventListener("mouseout", function () {
  startAutoSlide();
});



// 스와이퍼
var swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
});

//best
let shotContainer = document.getElementById('shot-container');
for(let i=1; i<=12; i++){
    shotContainer.innerHTML += `<li class="shot shot${i}">
    <a href=""
    ><img
    data-lightbox="/file/images/shot${i}.jpg"
    src="/file/images/shot${i}.jpg"
    alt="Best Shot" width=100px height=100px
    /></a>
    </li>`;
}

let bestShot = document.querySelectorAll(".shot"),
closeOverlayBtn = document.getElementById('close-overlay');

for (item of bestShot) {
  item.addEventListener("click", lightbox);
}

closeOverlayBtn.addEventListener('click',lightbox);

function lightbox(event) {
  event.preventDefault();
  //이벤트(인수) 요소를 elem에 반환
  let elem = event.target,
  // ID속성이 일치하는 요소를 반환
//   elemId = elem.getAttribute("id"),
  lightBoxImg = document.getElementById("lightbox-image"),
  lightBox = document.getElementById("lightbox-overlay"),
  //새로운 이미지 객체를 생성
  newImg = new Image();
  
  if (elem.hasAttribute("data-lightbox")) {
      event.preventDefault();
      //주소창에 # 생성: 새로고침 되는 것을 막기
      newImg.onload = function () {
          lightBoxImg.src = this.src;
        };
        lightBoxImg.src = "";
        newImg.src = elem.getAttribute("data-lightbox");
        lightBox.classList.add("visible");
    }
    
    console.log(lightBox);
    if (!elem.hasAttribute("data-lightbox")) {
          lightBox.classList.remove("visible");
    }
}

// 달성률 프로그래스
function progress(){
  const list = document.querySelectorAll(".list");
  const progress = document.querySelector("#progress > progress");
  const progressNum = document.querySelector("#progressNum > h5");
  const listNum = list.length;
  let barNum = 0;

  for(const value of Object.values(list)){
      if(value.dataset.visited == "Y"){
          barNum++;
      }
  }
  const progressGauge = parseInt(Math.round((barNum/listNum)*100));
  progress.value = progressGauge;
  progressNum.innerHTML = `${progressGauge}<span>%<span>`;
}

progress();