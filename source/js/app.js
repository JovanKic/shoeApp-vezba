
// JavaScript
window.sr = ScrollReveal(); 
sr.reveal('#header .phone', {
    scale: 0.3,
    delay: 500,
    duration: 700,
    origin: 'bottom',
    distance: '100px',
});
sr.reveal('#header h1', {
    scale: 0.3,
    duration: 700,
    origin: 'top',
    distance: '300px',
});
sr.reveal('#features div.car', {
    duration: 500,
    origin: 'bottom',
    distance: '100px',
});
sr.reveal('#features div.shoe', {
    delay: 200,
    duration: 700,
    origin: 'bottom',
    distance: '100px',
});
sr.reveal('#features div.device', {
    delay: 500,
    duration: 700,
    origin: 'bottom',
    distance: '100px',
});
sr.reveal('#discount .offer', {
    delay: 500,
    duration: 750,
    origin: 'right',
    distance: '1000px',
});
sr.reveal('#discount #fontele', {
    duration: 1500,
    origin: 'left',
    distance: '100px',
});
function showNav() {
    console.log("bravo kralju");
    var x = document.getElementById("responsive-nav");
    if (x.className === "responsive-nav main-nav") {
        x.className += " unfold";
    } else {
        x.className = "responsive-nav main-nav";
    }
}
