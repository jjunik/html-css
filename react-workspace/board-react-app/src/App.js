import React,{useState} from 'react';
import { BoardContext } from './context/BoradContext';
import Board from './pages/Board'
import { Route,Routes,Router, BrowserRouter } from 'react-router-dom';
import BoardList from './pages/BoardList';
import WritePost from './pages/WritePost';
import PostDetail from './pages/PostDetail';
import DetailPost from './pages/DetailPost';
import EditPost from './pages/EditPost';

const App = () => {
  const [boardList, setBoardList] = useState([
    
]);

  return(
    
    <BoardContext.Provider value={{boardList,setBoardList}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoardList/>}/>
          <Route path='/write' element={<WritePost/>}/>
          <Route path='/post/' element={<DetailPost/>}/>
          <Route path='/edit/' element={<EditPost/>}/>
        </Routes>
      </BrowserRouter>
    </BoardContext.Provider>
    
  )
}

export default App;
