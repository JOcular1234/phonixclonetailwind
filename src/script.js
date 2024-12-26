
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}toggleMenu();
//WHAT WE PLAN JS

let dropdown = document.querySelector('.dropdowncontent')
let change = document.querySelector('#plus')

function drop(){
    if(dropdown.style.display == 'block'){
        dropdown.style.display ='none'
        change.className = 'fa-solid fa-plus'    
    }
    else{
        dropdown.style.display = 'block'
        change.className ='fa-solid fa-minus'

    };
};


let dropdownCont1 = document.querySelector('.dropdowncontent1')
let change1 = document.querySelector('#plus1')
function drop1(){
    if(dropdownCont1.style.display == 'block'){
        dropdownCont1.style.display ='none'
        change1.className = 'fa-solid fa-plus'    
    }
    else{
        dropdownCont1.style.display = 'block'
        change1.className ='fa-solid fa-minus'

    };
};


let dropdownCont2 = document.querySelector('.dropdowncontent2')
let change2 = document.querySelector('#plus2')
function drop2(){
    if(dropdownCont2.style.display == 'block'){
        dropdownCont2.style.display ='none'
        change2.className = 'fa-solid fa-plus'    
    }
    else{
        dropdownCont2.style.display = 'block'
        change2.className ='fa-solid fa-minus'

    };
};

let dropdownCont3 = document.querySelector('.dropdowncontent3')
let change3 = document.querySelector('#plus3')
function drop3(){
    
    if(dropdownCont3.style.display == 'block'){
        dropdownCont3.style.display ='none'
        change3.className = 'fa-solid fa-plus'    
    }else{
        dropdownCont3.style.display = 'block'
        change3.className ='fa-solid fa-minus'
    };
};

let animateContainer1 = document.querySelector('.first-text-container');

gsap.to('.first-text-container',{
    duration:'4',
    delay:1,
   direction:'alternate-reverse',
    ease : 'bounce.out',
    translateY : '-40px',
});

// SCROLLED UP BTN
let returnUp = document.querySelector('.up')

        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 3500){
                returnUp.style.display = 'block';
            }else{
                returnUp.style.display = 'none'
           
            }
            console.log(window.scrollY);
            
        });
        
        returnUp.addEventListener('click', ()=>{
            window.scrollTo({
                top:20,
                behavior: 'smooth'
            });
        });

        // ENDLESS CONTAINER

        document.addEventListener('DOMContentLoaded', () => {
            const txtcontainer = document.getElementById('endless-memes-div');
      
            const handleScroll = () => {
              const containerPosition = txtcontainer.getBoundingClientRect().top;
              const screenHeight = window.innerHeight;
      
              if (containerPosition < screenHeight) {
                txtcontainer.classList.add('visible');
              }
            };
      
            window.addEventListener('scroll', handleScroll);
          });

        //   WHY CONTAINER SCROLLIN
        document.addEventListener('DOMContentLoaded', () => {
            const whyScrollIn = document.getElementById('scrollIn-container');
      
            const handleScrollIn = () => {
              const scrollInPosition = whyScrollIn.getBoundingClientRect().top;
              const screenHeights = window.innerHeight;
      console.log(screenHeights);
      
              if (scrollInPosition < screenHeights) {
                whyScrollIn.classList.add('visible');
              }
            };
      
            window.addEventListener('scroll', handleScrollIn);
          });

        document.addEventListener('DOMContentLoaded', () => {
            const whyScrollIn2 = document.getElementById('scrollIn-container2');
      
            const handleScrollIn2 = () => {
              const scrollInPosition2 = whyScrollIn2.getBoundingClientRect().top;
              const screenHeights2 = window.innerHeight;
      console.log(screenHeights2);
      
              if (scrollInPosition2 < screenHeights2) {
                whyScrollIn2.classList.add('visible');
              }
            };
      
            window.addEventListener('scroll', handleScrollIn2);
          });
