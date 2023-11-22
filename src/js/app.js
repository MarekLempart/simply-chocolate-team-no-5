let list = document.querySelector('.slider .list') ;
let item = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let prev = document.getElementById('next');

let active = 0;
let lenghtItems = items.lenght - 1;

next.onclick = function(){
    if(active + 1 >lenghtItems){
        active = 0;
        else {
            active = active + 1;
        }
    };
    prev.onclick = function(){
        if(active - 1 < 0){
            active = lenghtItems;
        }else{active = active - 1};
    }
    reloadslider();

    let refreshSlider = setInterval ()=> {next.click()}, 5000;
    function reloadslider(){
        let checkLeft = items[active].ofsetLeft;
        list.style.Left = -checkLeft + 'px';
    }
    let lastActiveDot = document.querySelector('.slider .dots li .active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
clearInterval(refreshSlider);
refreshSlider = setInterval(()=> {next. click()}, 5000);

    dots.forEach(li , key ) => {
        li.addEventListener ('click'function(){
            active = key;
            reloadslider();
        })
    };

}