import React ,{useContext, useState} from "react";
import { BoardContext } from "../context/BoradContext";
import { useNavigate } from "react-router-dom";
import '../css/Write.css'

const AddPost = () => {
    
    let today = new Date();
    function dateFormat(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        month = month >= 10 ? month : '0' + month;
        day = day >= 10 ? day : '0' + day;
        hour = hour >= 10 ? hour : '0' + hour;
        minute = minute >= 10 ? minute : '0' + minute;
        second = second >= 10 ? second : '0' + second;

        return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

    const navigate = useNavigate();
    const {boardList,setBoardList} = useContext(BoardContext);
    const [newpost, setNewpost] = useState({
        id:boardList.length + 1,
        title:"",
        author:"",
        content:"",
        writingTime:dateFormat(today)
    });

    

    const addPost = () =>{
        setBoardList([newpost, ...boardList]);
        // setNewpost({title:"",
        //     author:"",
        //     content:""});
        navigate("/")
    }
    const handleBoardHome = () =>{
        navigate('/')
    }
    return(
        <div className="write-container">
            <h1>글쓰기</h1>
            <div className="write-title">
                <input
                    type="text"
                    placeholder="제목"
                    value={newpost.title}
                    onChange={(e) => setNewpost({...newpost, title: e.target.value})}
                />
            </div>
            <div className="write-author">
                <input
                    type="text"
                    placeholder="작성자"
                    value={newpost.author}
                    onChange={(e) => setNewpost({...newpost, author: e.target.value})}
                />
            </div>    
            <div className="write-content">
                <textarea
                    placeholder='내용'
                    value={newpost.content}
                    onChange={(e) => setNewpost({...newpost, content: e.target.value})}
                />
            </div>
            <div>
                <button onClick={addPost} >저장</button>
                <button onClick={handleBoardHome}>취소</button>
            </div>
        </div>
        
    );
}
export default AddPost;