window.onload = function(){
    // 메뉴기능
    const nav = document.querySelector(".nav");
    const btMenu = document.querySelector(".bt-menu");
    const navClose = document.querySelector(".nav-close");
    btMenu.addEventListener("click" , function(){
        // 클래스를 nav에 추가하고 싶다.
        nav.classList.add("nav-active");
    });
    navClose.addEventListener("click" ,function(){
        // 클래스를 nav에 삭제하고 싶다.
        nav.classList.remove("nav-active");
    });
    // nav 영역을 벗어나는 이벤트 발생 처리
    nav.addEventListener("mouseleave", function(){
        nav.classList.remove("nav-active");
    });
};