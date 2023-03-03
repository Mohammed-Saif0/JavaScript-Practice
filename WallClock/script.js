
const hourHand = document.querySelector('.hour')
const minutesHand = document.querySelector('.minutes')
const secondsHand = document.querySelector('.seconds')
const rotated = (element,rotation)=>{
    element.style.setProperty("--rotation",rotation * 360);
}

const setup = () =>{
    let date = new Date();
    let seconds = date.getSeconds()/60;
    let minutes = (seconds+date.getMinutes())/60;
    let hours = (minutes+date.getHours())/12;

    
    rotated(secondsHand,seconds);
    rotated(minutesHand,minutes);
    rotated(hourHand,hours);
}

setInterval(setup,1000);
setup();