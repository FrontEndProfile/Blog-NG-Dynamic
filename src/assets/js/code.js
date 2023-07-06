
// document.addEventListener("DOMContentLoaded", function () {
function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("app-home #main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("app-home #main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("app-home #main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco()

const canvas = document.querySelector("canvas");

const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});


function files(index) {
  const data = `
  /assets/images/1.webp
  /assets/images/2.webp
  /assets/images/3.webp
  /assets/images/4.webp
  /assets/images/5.webp
  /assets/images/6.webp
  /assets/images/7.webp
  /assets/images/8.webp
  /assets/images/9.webp
  /assets/images/10.webp
  /assets/images/11.webp
  /assets/images/12.webp
  /assets/images/13.webp
  /assets/images/14.webp
  /assets/images/15.webp
  /assets/images/16.webp
  /assets/images/17.webp
  /assets/images/18.webp
  /assets/images/19.webp
  /assets/images/20.webp
  /assets/images/21.webp
  /assets/images/22.webp
  /assets/images/23.webp
  /assets/images/24.webp
  /assets/images/25.webp
  /assets/images/26.webp
  /assets/images/27.webp
  /assets/images/28.webp
  /assets/images/29.webp
  /assets/images/30.webp
  /assets/images/31.webp
  /assets/images/32.webp
  /assets/images/33.webp
  /assets/images/34.webp
  /assets/images/35.webp
  /assets/images/36.webp
  /assets/images/37.webp
  /assets/images/38.webp
  /assets/images/39.webp
  /assets/images/40.webp
  /assets/images/41.webp
  /assets/images/42.webp
  /assets/images/43.webp
  /assets/images/44.webp
  /assets/images/45.webp
  /assets/images/46.webp
  /assets/images/47.webp
  /assets/images/48.webp
  /assets/images/49.webp
  /assets/images/50.webp
  /assets/images/51.webp
  /assets/images/52.webp
  /assets/images/53.webp
  /assets/images/54.webp
  /assets/images/55.webp
  /assets/images/56.webp
  /assets/images/57.webp
  /assets/images/58.webp
  /assets/images/59.webp
  /assets/images/60.webp
  /assets/images/61.webp
  /assets/images/62.webp
  /assets/images/63.webp
  /assets/images/64.webp
  /assets/images/65.webp
  /assets/images/66.webp
  /assets/images/67.webp
  /assets/images/68.webp
  /assets/images/69.webp
  /assets/images/70.webp
  /assets/images/71.webp
  /assets/images/72.webp
  /assets/images/73.webp
  /assets/images/74.webp
  /assets/images/75.webp
  /assets/images/76.webp
  /assets/images/77.webp
  /assets/images/78.webp
  /assets/images/79.webp
  /assets/images/80.webp
  /assets/images/81.webp
  /assets/images/82.webp
  /assets/images/83.webp
  /assets/images/84.webp
  /assets/images/85.webp
  /assets/images/86.webp
  /assets/images/87.webp
  /assets/images/88.webp
  /assets/images/89.webp
  /assets/images/90.webp
  /assets/images/91.webp
  /assets/images/92.webp
  /assets/images/93.webp
  /assets/images/94.webp
  /assets/images/95.webp
  /assets/images/96.webp
  /assets/images/97.webp
  /assets/images/98.webp
  /assets/images/99.webp
  /assets/images/100.webp
  /assets/images/101.webp
  /assets/images/102.webp
  /assets/images/103.webp
  /assets/images/104.webp
  /assets/images/105.webp
  /assets/images/106.webp
  /assets/images/107.webp
  /assets/images/108.webp
  /assets/images/109.webp
  /assets/images/110.webp
  /assets/images/111.webp
  /assets/images/112.webp
  /assets/images/113.webp
  /assets/images/114.webp
  /assets/images/115.webp
  /assets/images/116.webp
  /assets/images/117.webp
  /assets/images/118.webp
  `;
  return data.split("\n")[index];
}

const frameCount = 118;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  const canvas = ctx.canvas;
  const hRatio = canvas.width / img.width;
  const vRatio = canvas.height / img.height;
  const ratio = Math.max(hRatio, vRatio);
  const centerShift_x = (canvas.width - img.width * ratio) / 2;
  const centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page",
  pin: true,
  // markers:true,
  scroller: `#main`,
  //   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
// });







const card = gsap.utils.toArray('.card')[0]
const topSection = document.querySelector('.cardy')

const cardCreate = gsap.utils.toArray('.cardCreate')[0]
const sectionCreate = document.querySelector('.cardyCreate')

const cardView = gsap.utils.toArray('.cardView')[0]
const sectionView = document.querySelector('.cardyView')

topSection.addEventListener('mousemove', (event) => {
  const mouseX = -((window.innerWidth / 2) - event.pageX) / 30
  const mouseY = ((window.innerHeight / 2) - event.pageY) / 10

  gsap.to(card, {
    duration: 0.5,
    rotationY: mouseX,
    rotationX: mouseY,
    ease: 'power2.out'
  })
})

// create card 3d
sectionCreate.addEventListener('mousemove', (event) => {
  const mouseX = -((window.innerWidth / 2) - event.pageX) / 60
  const mouseY = ((window.innerHeight / 2) - event.pageY) / 30

  gsap.to(cardCreate, {
    duration: 0.5,
    rotationY: mouseX,
    rotationX: mouseY,
    ease: 'power2.out'
  })
})

// view card 3d
sectionView.addEventListener('mousemove', (event) => {
  const mouseX = -((window.innerWidth / 2) - event.pageX) / 70
  const mouseY = ((window.innerHeight / 2) - event.pageY) / 50

  gsap.to(cardView, {
    duration: 0.5,
    rotationY: mouseX,
    rotationX: mouseY,
    ease: 'power2.out'
  })
})






// gsap.from(".test", {
// 	color:'red',
// 	delay: '1',
//   x: 100
// });