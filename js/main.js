// first select all pics
var cards = document.querySelectorAll('img');
/*make an array from the node list to access the array methods*/ var imgs = Array.from(cards); 
// declare variables 
var currentIndex;
var nextIndex;
var popUp;

for(var i = 0; i < cards.length; i++ ) {

    cards[i].style.cssText = 'cursor: pointer;'
    cards[i].addEventListener('click', function (e) {
        var imgSrc = e.target.getAttribute('src');
        // console.log(imgSrc)
        // console.log(imgs.indexOf(e.target));
        currentIndex = imgs.indexOf(e.target);
        popUp = document.querySelector('.pop-up');
        // console.log(popUp)
        popUp.style.cssText = `background-image: url(${imgSrc});`
        function display() {
            document.querySelector('.layer').style.cssText= `display: flex !important`;
        }
        display();
    })
}

// select the close icon and make its function
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.layer').style.cssText = `display: none !important;`
});

// ######## use this to press with keyboard keys ########
// select next and prev icons

var next = document.querySelector('.right');
var prev = document.querySelector('.left');

function slide(i) {
    currentIndex = currentIndex + i;
    if (currentIndex == -1) {
        currentIndex = imgs.length -1;
    }
    if (currentIndex == imgs.length) {
               currentIndex = 0
        }
    var nextIndexSrc = imgs[currentIndex].getAttribute('src');
    
    // console.log(imgs[currentIndex + 1].src)
    popUp.style.cssText = `background-image: url(${nextIndexSrc})`
}
next.addEventListener('click', function () {
    slide(1);
})
prev.addEventListener('click', function () {
    slide(-1);
})
document.addEventListener('keydown', function (e) {
    
if (e.key == 'ArrowRight') {
    slide(1)
}
else if (e.key == 'ArrowLeft') {
    slide(-1)
}
else if (e.key == 'Escape') {
    document.querySelector('.layer').style.cssText = `display: none !important;`
}
})


// ######### this way without using keyboard keys ######### 

// next.addEventListener('click', function () {
//     nextIndex = currentIndex ++ ;
//     if (currentIndex == imgs.length) {
//         currentIndex = 0
//     }
//     var nextIndexSrc = imgs[nextIndex].getAttribute('src');
    
//     // console.log(imgs[currentIndex + 1].src)
//     popUp.style.cssText = `background-image: url(${nextIndexSrc})`
// })
// prev.addEventListener('click', function () {
//     nextIndex = currentIndex -- ;
//     if (currentIndex == -1) {
//         currentIndex = imgs.length -1;
//     }
//     var nextIndexSrc = imgs[nextIndex].getAttribute('src');
    
//     // console.log(imgs[currentIndex + 1].src)
//     popUp.style.cssText = `background-image: url(${nextIndexSrc})`
// })
