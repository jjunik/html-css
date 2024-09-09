document.addEventListener("DOMContentLoaded", function(e){
    let button = document.querySelector("input");
    let p = document.querySelector("p");

    // 버튼을 클릭 했을 때
    button.addEventListener("click", function(e){
        // p태그에 들어있는 내용을 수정
        // textContent : 태그에 들어있는 contect 내용을 반환하는구나
        p.textContent = "JS로 입력함."
        console.log(p.textContent)
    })
})