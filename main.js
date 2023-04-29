let isRight = false;
function changeTheme(){
    const floatingButton = document.querySelector("#floting-btn");
    if(!isRight){
        floatingButton.classList.add("float-right");
    }else{
        floatingButton.classList.remove("float-right");
    }
    isRight = !isRight;
}