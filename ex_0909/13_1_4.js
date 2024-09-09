// 버튼을 눌렀을 때 img태그의 이미지 변경
// 이미지가 나오는 원리 src = "이미지경로"
// 버튼을 눌렀을 때 img태그의 src값 변경
document.addEventListener("DOMContentLoaded", function(e){
    let button = document.querySelector("input");
    let image = document.querySelector("img");
    let image1 = "image/profile.jpg";
    let image2 = "image/h1.jpg";
    let image3 = "image/h2.jpg";
    button.addEventListener("click", function(e){
        // img 태그의 src를 수정
        let src = image.getAttribute("src"); // img 태그의 src속성값을 변수에 저장
        if(src === image1){
            image.setAttribute("src", image2)
        }else if(src === image2){
            image.setAttribute("src", image3)
        }else{
            image.setAttribute("src", image1)
        }
            
    })
})