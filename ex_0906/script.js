
    // document 객체를 대상으로 하는 이벤트리스너를 추가한다
    // 이벤드 종류는 DOMcontentLoaded이다
    // DOMContentLoaded : 문서의 콘텐츠 로딩이 완료되었음을 의미하는 이벤트
    document.addEventListener("DOMContentLoaded", 
        // html 코드가 로딩된 다음 처리할 작업
        function(e){
        // input 태그가 만들어지기 전에 찾아달라고 할 수 있기때문에
        // input 태그가 로딩되지 않았을  시 button에 null을 저장할수있따. 
        // input 태그를 찾아 button 변수에 저장
        let button = document.querySelector("input");
        // button 변수에 이벤트리스너 추가
        // 이벤트 종류는 input
button.addEventListener("input", 
    function(e){ // e: event에 대한 정보 이벤트가 발생한 태그에 대한정보
        // 콘솔에 입력창으 ㅣ값을 출력한다
    console.log(e.target.value);
})
    })
    

function hi(){
    alert("hi");
}