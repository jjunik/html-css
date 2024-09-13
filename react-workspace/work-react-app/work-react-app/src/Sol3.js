import React,{useState, useEffect} from "react";

function Sol3(){
    const [count, setCount] = useState(0);
    const [renderCount, setRenderCount] = useState(0)

    const countHandler = () => {
        setCount(count+1);
    }

    useEffect(() => {
        setRenderCount(renderCount+1);
        console.log('렌더링 완료')},[count]);

    return(
        <div>
            <h3>count: {count}</h3>
            <h3>랜더링 횟수: {renderCount}</h3>
            <button onClick={countHandler}>클릭</button>
        </div>
    )
}
export default Sol3

