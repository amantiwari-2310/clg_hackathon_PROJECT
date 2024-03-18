function init(){
  gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
el: document.querySelector("body"),
smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("body", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, 
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},

pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
init()

// gsap.from("#about ",{
//   scale:1.1,
//   // duration:"0/.5",
//    scrollTrigger:{
//        trigger:"#about",
//        scroller:"body",
//        markers:true,
//        start:"top 75%",
//        end:"top 55%",
//        scrub:4,
//    }
// })

