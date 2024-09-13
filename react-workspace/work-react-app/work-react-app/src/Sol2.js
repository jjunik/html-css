import React,{useState, useEffect} from "react";

function Sol2(){
    const [count, setCount] = useState(0);
    const [text,setText] = useState("");

    const inputHandler = (e) => {
        setText(e.target.value);
        console.log('input값이 바뀜');
    }
    const countHandler = () => {
        setCount(count+1);
        console.log('count값이 바뀜');
    }
    useEffect(() => {console.log('렌더링 완료')},[]);


return(
    <div>
        <h3>{count}</h3>
        <button onClick={countHandler}>1</button>
        <hr/>
        <input onChange={inputHandler} type="text"/>
        <h3>{text}</h3>

        
    </div>
);
}
export default Sol2
