import logo from './logo.svg';
import './App.css';
// Redux와 React 를 연결하는데 필요한 Provider, useDispatch, useSelector를  import
import {Provider, useDispatch, useSelector} from 'react-redux';
// Redux 스토어를 import
import store from './redux/store'
// 액션 생성 함수를 import
// 상태를 변경하는 액션을 dispatch 하기위해 사용된다./
import { increment,decrement } from './redux/actions';
import React,{useState} from 'react';
import {addTodo, removeTodo} from './Todo/actions';
import { login,logout } from './login/action';

// function Counter(){
// // useSelector : Redux 에서 store 에 저장되어 있는 state를 읽어오는 hook
// const count = useSelector(state => state.count);

// useDispatch : store에 action을 보낼 수 있는 hook
// const dispatch = useDispatch();
// return (
//   <div className="App">{
//     /* 현재 state인 count 값을 화면에 출력한다
//     <h1>Counter : {count}</h1>
//     increment 버튼을 클릭하면 increment() 액션을 디스패치한다
//     <button onClick={() => dispatch(increment())}>Increment</button>
//     <button onClick={() => dispatch(decrement())}>Decrement</button> */}
//   </div>
// );
// }

function App() {
  // input 태그에 입력되는 값을 저장하는 state
  const [usernameInput, setUserNameInput] = useState('')
  const {isLogedin, userName} = useSelector(state => state);
  const dispatch = useDispatch();
  const handleLogin = () =>{
    if(usernameInput.trim()){
      // 유저네임을 전달받은 login()액션을 반환한 객체를 리듀서에 저장
      dispatch(login(usernameInput))
      setUserNameInput('')
    }
  }

  const handleLogout = () => {
    dispatch(logout());
  }

    return(
      <div>
      <h1>Login Status</h1>
      {isLogedin ? (
        <div>
          <p>Welcome, {userName}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ):(
        <div>
          <input
            type="text"
            value={usernameInput}
            onChange={(e) => {setUserNameInput(e.target.value)}}
            placeholder='Enter your username'
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  )
}

export default App;
