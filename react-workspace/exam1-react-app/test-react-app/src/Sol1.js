import React, {useState} from "react";

function Sol1(){
    const [foods, setFoods] = useState(['초콜릿','사탕'])
    const [value, setValue] = useState("")
    
    const inputHandler = (e) => {
        setValue(e.target.value);
    }
    const clickHandler = () =>{
        setFoods([...foods,value])

    }
    return(
        <div>
            <input onChange={inputHandler}/>
            <button onClick={clickHandler}>추가</button>
            <ul>
                {foods.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default Sol1