import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"
import React,{useContext} from "react"
import { BoardContext } from "../context/BoradContext"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const PostDetail = () => {
    const navigate = useNavigate();
    const {boardList, setBoardList} = useContext(BoardContext);
    const location = useLocation();
    const title = location.state.title;
    const author = location.state.author;
    const writingTime = location.state.writingTime;
    const content = location.state.content;
    console.log(title);
    return(
        <div>
            <div>
                <h1>{title}</h1>
                <p>{author}</p>
                <p>{writingTime}</p>
                <CustomInput
                    label={content}></CustomInput>
            </div>
            <div>
                <CustomButton label={'수정'}></CustomButton>
                <CustomButton label={'삭제'}></CustomButton>
                <CustomButton label={'목록으로'} onClick={() => navigate("/")}></CustomButton>
            </div>
        </div>
    )
}
export default PostDetail;