document.addEventListener("DOMContentLoaded",function (e){
    let keydown = document.querySelector("#keydown");
    keydown.addEventListener("keydown", function (e){
        // key라는 키는 누른 버튼에 대한 정보를 가지고있다.
        console.log(e.key);
        // alert('this is'+ e.key.toUpperCase());
        // q를 눌렀을 때 this is q 라는 문구를 가진 경고창 띄우기
        if(e.key === 'q'){
            alert('this is Q');
        }
    })
//change 이벤트 만들고 e.target.value 콘솔에 출력
    let change = document.querySelector("#change");

// change의 경우 내용이 변경되고 포커스가 벗어나면 적용
    change.addEventListener("change", function(e){
    console.log(e.target.value)
})

    let input = document.querySelector("#input");
    input.addEventListener("input", function(e){
        console.log(e.target.value)
    })
})



