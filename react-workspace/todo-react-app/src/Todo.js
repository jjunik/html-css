import React,{useState} from "react";
import {ListItem, ListItemText, InputBase, Checkbox, 
    ListItemSecondaryAction, IconButton} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
/* 
useState
리엑트에서 사용되는 hook중 하나로 함수형 컴포넌트에서 상태변수를 상요할 수 있도록 함
hjook을 사용하면 리엑트가 제공하는 기능과 상태변수를 사용할 수 있음

함수 생성 방법
1. function 함수명(){
}
2. let 함수명 = function(){
}
화살표 함수 규칙
1.  매개변수가 1개면 소괄호 생략가능
2. 명령이 한줄이면서 return이 있다면 , 중괄호화 return같이 생략 가능
*/


const Todo = (props) => {
    const [item, setItem] = useState(props.item);
    const deleteItem = props.deleteItem;
    const [readOnly, setReadOnly] = useState(true);
    const editItem = props.editItem;
    const editEventHandler = (e) => {
        setItem({...item,title:e.target.value})

    }
    
    const checkboxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem(item);
    }
    // turnOffReadOnly 함수
    // 내용쪽을 클릭했을 때 수정 가능한 상태로 만들기
    const turnOffReadOnly = () => {
        setReadOnly(false);
    }
    const turnOnReadOnly = (e) =>{
        if(e.key === 'Enter'){
            setReadOnly(true);
            editItem(item);
        }
    }
    // deleteEventHandler 작성
    const deleteEventHandler = () =>{
        // 삭제하려고 하는 todo 전달
        deleteItem(item);
    }
    return(
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler}/>
            <ListItemText>
                <InputBase
                inputProps={{"aria-label" : "naked" , "readOnly" : readOnly}}
                onClick={turnOffReadOnly}
                onKeyDown={turnOnReadOnly}
                onChange={editEventHandler}
                type ="text"
                id={item.id} 
                name={item.id} 
                value={item.title} 
                multiline={true}
                fullwidth={true}
                />
            </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label = "Delete Todo" onClick={deleteEventHandler}>
                        <DeleteOutlined/>
                    </IconButton>
                </ListItemSecondaryAction>
        </ListItem>
    // <div className="Todo">
    //     <input type="checkbox" 
    //         id={item.id} 
    //         name={item.id} 
    //         checked= {item.done}/>
    //     <label for={item.id}>{item.title}</label>
    //     {/* label 태그는 input에 붙히는 글을 적는다. 
    //     for는 labal을 붙힐 태그를 설정 id값을 준다.*/}
    // </div>
    );
}
export default Todo;