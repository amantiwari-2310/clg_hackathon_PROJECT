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

gsap.to("#about ",{
  scale:1.1,
  // duration:"0.75",
   scrollTrigger:{
       trigger:"#about",
       scroller:"body",
       // markers:true,
       start:"top 75%",
       end:"top 55%",
       scrub:1,
   }
})

gsap.from(" .box",{
  scale:0.8,
opacity:0,
  duration:1,
  stagger:1,
  scrollTrigger:{
      trigger:".box",
      scroller:"body",
      markers:true,
      start:"top 70%",
      end:"top 65%",
      scrub:2,
  }
})