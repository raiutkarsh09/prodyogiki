var tabs = document.getElementsByClassName('tab');
var mobileWindow = window.matchMedia("(max-width: 700px)");
tabs[1].classList.add('active');

//tab buttons working
function setContent(e) {
    for(var j=0;j<tabs.length;j++) {
        if(tabs[j].classList.contains('active')) {
            tabs[j].classList.remove('active');
        }
    }
    e.target.classList.add('active');
    for(var i=0;i<tabs.length;i++) {
        if(tabs[i].classList.contains('active')) {
            document.getElementById('window').style.transform = 'translateX('+(i*-100)+'vw)';
            if(mobileWindow.matches && i<3 && i>0) {
                document.getElementById('navbar').style.transform = 'translateX('+((i-1)*-33.3)+'vw)';
            }
        }
    }
}
