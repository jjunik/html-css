import React, { useState, useContext } from "react"
import { BoardContext } from "../context/BoradContext"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom"

const WritePost = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content,setContent] = useState('');
    const {boardList, setBoardList} = useContext(BoardContext);
    const navigate = useNavigate();

    const savePost = (e) => {
        e.preventDefault();

        const newPost = {
            id: boardList.length+1,
            title,
            author,
            content,
            writingTime: new Date().toISOString().slice(0,16).replace("T"," "),
        }
        setBoardList([newPost, ...boardList]);
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