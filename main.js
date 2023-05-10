let isRight = false;
let nightTimeOut;
let dayTimeOut;
let isInAnimation = false;

function changeTheme(){
    const floatingButton = document.querySelector("#floting-btn");
    if(!isRight){
        floatingButton.classList.add("float-right");
        if(isInAnimation){
            cancelDayAnim();
        }else{
            callNightAnim();
        };
    }else{
        floatingButton.classList.remove("float-right");
        if(isInAnimation){
            cancelNightAnim();
        }else{
            callDayAnim();
        }
    }
    isRight = !isRight;
}

function callNightAnim(){
    isInAnimation = true;
    const moon = document.querySelector("#moon");
    const sun = document.querySelector("#sun");

    moon.classList.remove("cancelAnim");
    moon.classList.add("call-moon");
    moon.classList.remove("repositionMoon");
    
    nightTimeOut = setTimeout(function() {
        sun.classList.add("repositionSun");
        isInAnimation = false;
    }, 1000);
;}

function callDayAnim(){
    isInAnimation = true;
    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");

    sun.classList.remove("cancelAnim")
    sun.classList.remove("repositionSun")
    moon.classList.remove("call-moon");

    dayTimeOut = setTimeout(function() {
        moon.classList.add("repositionMoon");
        isInAnimation = false;
    }, 1000);
}

function cancelNightAnim(){
    isInAnimation = false;
    const moon = document.querySelector("#moon");

    moon.classList.remove("call-moon");
    moon.classList.add("repositionMoon");
    moon.classList.add("cancelAnim");
    
    clearTimeout(nightTimeOut);
}

function cancelDayAnim(){
    isInAnimation = false;
    const sun = document.querySelector("#sun");

    // moon.classList.remove("call-moon");
    sun.classList.add("repositionSun");
    sun.classList.add("cancelAnim");
    
    clearTimeout(dayTimeOut);
}