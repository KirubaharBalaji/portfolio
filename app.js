const sections=document.querySelectorAll('.section');
const sectBtns=document.querySelectorAll('.controls');
const sectBtn=document.querySelectorAll('.control');
const allSections=document.querySelectorAll('.main-content')[0];


function PageTransitions() {
    //Button Click Active Class
    for (let i=0; i<sectBtn.length;i++) {
        sectBtn[i].addEventListener('click',function(){
            let currentBtn=document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace('active-btn','');
            this.className+=' active-btn';
        })
    }

    //Sections Active Class
   allSections.addEventListener('click',(e) => {
    const id=e.target.dataset.id;
    if(id) {
        //remove selected from the other buttons
        sectBtns.forEach((btn) => {
            btn.classList.remove('active');       
        
    })
    e.target.classList.add('active');

    //hide other sections
    sections.forEach((section) => {
     section.classList.remove('active')   
    })
    const element=document.getElementById(id);
    element.classList.add('active');
    }

    })
    // Toggle Theme
    const themeBtn=document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() => {
        let element=document.body;
        element.classList.toggle('light-mode');
    })
}

PageTransitions();