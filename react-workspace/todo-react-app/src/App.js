import logo from './logo.svg';
import Todo from './Todo';
import Count from './Count';
import { useEffect, useState } from 'react';
import {Container, List, Paper} from "@mui/material";
import './App.css';
import AddTodo from './AddTodo';
import axios from 'axios';
import {call} from './service/ApiService';

export default function App() {
  const [items, setItems] = useState([])
  useEffect(() =>{
  // 백엔드에게 요청하기 
call("/todo", "GET")
.then(result => setItems(result.data))
  },[])

  

//추가
// 전체 데이;터를 App.js에서 관리하기 때문에 함수를 여기에 작성
const addItem = (item) =>{
  call("/todo", "POST", item)
  .then(result => setItems(result.data))
 }
  // done 초기화
  // ... 스프레드 연산자
  // 배열이나 객체의 요소를 개별적으로 펼쳐서 다른 배열이나 객체에
  // 삽입 할 때 사용한다.
  // 리액트에서 상태를 업데이트 할 때 사용한다.

// 내용 수정
  const editItem = (item) => {
    call("/todo", "PUT", item)
    .then(result => setItems(result.data))
  }
//삭제
const deleteItem = (item) => {
  // 삭제할 아이템을 찾는다
call("/todo", "DELETE", item)
.then(result => setItems(result.data))
}
// App.js에서 todo에 deleteItem 연결하기


// map() -> 반복문 안에 들어있는 내용을 하나씩 꺼내서 처리한다.
// key : 요소의 리스트를 만들 때 react에서 컴포넌트를 렌더링 했을 때
// 어떤 아이템이 변경되는지 빠르게 감지하기 위해 사용한다.
// 만약 key가 설정되지 않았다면 가상 dom을 순차적으로 비교하면서 감지하기 때문에 key가 없을 때 보다 속도가 느리다.
let todoItems = items.length > 0 && (
  <Paper style={{margin:16}}>
    <List>
    {items.map((item) =>(
      <Todo item={item} key={item.id} deleteItem={deleteItem} editItem={editItem}/>
    ))}
    </List>
  </Paper>
);

  return (
    <div className="App">
      <container maxWidth="md">
      <AddTodo addItem={addItem}></AddTodo>
      {/* props를 컴포넌트에 전달하기
        이름 = {useState값} */}
      <div className='TodoList'>{todoItems}</div>
      </container>
    </div>
  );
}