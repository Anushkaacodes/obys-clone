var tl =gsap.timeline()
tl.from(".line  h1", {
    y:200,
    stagger:0.25,
    duration:0.9,
    delay:0.3
    })

    tl.from("#line1-part1" , {
        opacity:0,
        onStart: function(){
            var h5timer= document.querySelector("#line1-part1 h5")
            var grow=0
            setInterval(function(){
                if(grow<100){
                    h5timer.textContent=grow++;
                }
                else{
                    h5timer.textContent=100;
                }
                
            },30 );
        },
    });

tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
    
   tl.to('#loader', {
    opacity:0,
    duration:0.2,
    delay:4,
 x

});

tl.from("#page1",{
    y:1900,
    delay:0.2,
    opacity:0,
    duration:0.5,
    ease:power4
})

tl.to("#loader",{
    display:"none"
})


