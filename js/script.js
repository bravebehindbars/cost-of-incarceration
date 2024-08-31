let ham = document.getElementsByClassName('slider')[0]
let menu = document.getElementsByClassName('menu')[0]
let navbar = document.getElementsByClassName('nav-bar')[0]
let sliderImg = document.getElementById('slider-img')


ham.addEventListener('click', event => {

    menu.classList.toggle('show')
    navbar.classList.toggle('nav-height')

})
 let images = ['https://ntvb.tmsimg.com/assets/p24211233_b_h8_ad.jpg?w=1280&h=720','./img/barsofmoney.jpeg','https://www.silvalegal.com/wp-content/uploads/2024/07/pexels-enrico-hanel-3409494-5369188-1080x675.jpg', 'https://images.squarespace-cdn.com/content/v1/5bf92f2650a54f868ebcffb4/1546800636931-LBTQD2H1R40TXEDKQ1IX/What-Does-It-Mean-to-Be-Exonerated.jpg']
 let i = 0;
function slide(){
    sliderImg.src = images[i]

    i++;
    if(i===4){
        i=0;
    }
}
setInterval(slide,2000)