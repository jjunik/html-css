import React, { useState, useContext } from "react"
import { BoardContext } from "../context/BoradContext"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const WritePost = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content,setContent] = useState('');
    const {boardList, setBoardList} = useContext(BoardContext);
    const navigate = useNavigate();

    const savePost = (e) => {
        e.preventDefault();

        // id는 spring에서 자동으로 생성
        // 등록 날짜는 서버에서 받아옴
        const newPost = {
            title,
            author,
            content,
        }
        const response = axios('http://localhost:9090/api/board/write',{
            headers:{"Content-Type":"application/json"},
            data : JSON.stringify(newPost),
            method : "post"
        })
        console.log(response.data);
        alert("게시물이 등록되었습니다.")
        navigate("/")
    }
    
    const backToBoard= () =>{
        navigate("/")
    }
    return(
        <div>
            <h1>글쓰기</h1>
            <form>
                <CustomInput label="제목" value={title} onChange={(e)=>{setTitle(e.target.value)}} />

                <CustomInput label="작성자" value={author} onChange={(e)=>{setAuthor(e.target.value)}}/>
                <CustomInput
                    label="내용"
                    multiline
                    rows={6}
                    value={content}
                    onChange={(e)=>{setContent(e.target.value)}}
                />
                <CustomButton label="저장" onClick={savePost}/>
                <CustomButton label="취소" variant="outlined" color="secondary" onClick={backToBoard} />
            </form>
        </div>
    )
}
export default WritePost;