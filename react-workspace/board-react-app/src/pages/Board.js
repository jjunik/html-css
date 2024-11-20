import React,{useState} from "react";


function Board(){
const [boardList, setBoardList] = useState([
    { id: 1, title: "첫 번째 게시글", author: "작성자1", writingTime: "2024-11-20 12:00", content: "첫 번째 게시글의 내용입니다." },
    { id: 2, title: "두 번째 게시글", author: "작성자2", writingTime: "2024-11-20 13:00", content: "두 번째 게시글의 내용입니다." },
    { id: 3, title: "세 번째 게시글", author: "작성자3", writingTime: "2024-11-20 14:00", content: "세 번째 게시글의 내용입니다." },
    { id: 4, title: "네 번째 게시글", author: "작성자4", writingTime: "2024-11-20 15:00", content: "네 번째 게시글의 내용입니다." },
    { id: 5, title: "다섯 번째 게시글", author: "작성자5", writingTime: "2024-11-20 16:00", content: "다섯 번째 게시글의 내용입니다." },
    { id: 6, title: "여섯 번째 게시글", author: "작성자6", writingTime: "2024-11-20 17:00", content: "여섯 번째 게시글의 내용입니다." },
    { id: 7, title: "일곱 번째 게시글", author: "작성자7", writingTime: "2024-11-20 18:00", content: "일곱 번째 게시글의 내용입니다." },
    { id: 8, title: "여덟 번째 게시글", author: "작성자8", writingTime: "2024-11-20 19:00", content: "여덟 번째 게시글의 내용입니다." },
    { id: 9, title: "아홉 번째 게시글", author: "작성자9", writingTime: "2024-11-20 20:00", content: "아홉 번째 게시글의 내용입니다." },
    { id: 10, title: "열 번째 게시글", author: "작성자10", writingTime: "2024-11-20 21:00", content: "열 번째 게시글의 내용입니다." },
    { id: 11, title: "열한 번째 게시글", author: "작성자11", writingTime: "2024-11-21 10:00", content: "열한 번째 게시글의 내용입니다." },
    { id: 12, title: "열두 번째 게시글", author: "작성자12", writingTime: "2024-11-21 11:00", content: "열두 번째 게시글의 내용입니다." },
    { id: 13, title: "열세 번째 게시글", author: "작성자13", writingTime: "2024-11-21 12:00", content: "열세 번째 게시글의 내용입니다." },
    { id: 14, title: "열네 번째 게시글", author: "작성자14", writingTime: "2024-11-21 13:00", content: "열네 번째 게시글의 내용입니다." },
    { id: 15, title: "열다섯 번째 게시글", author: "작성자15", writingTime: "2024-11-21 14:00", content: "열다섯 번째 게시글의 내용입니다." },
]);
const [selected, setSelected] = useState("");

const handleSelect = (e) => {
    setSelected(e.target.value)
}
    return(
        <div>
                <h1 style={{textAlign:'center'}}>게시판</h1>
            <div style={{display:'flex',justifyContent:'right'}}>
                <button style={{marginLeft:'auto'}}>글쓰기</button>
            </div>
            <div>
                {boardList.map(post => (
                    <div key={post.id}
                        style={{border : '1px solid black', 
                        margin: '10px', 
                        padding : '10px',
                        justifyContent:'right'}} >
                            <div style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
                                <h3>{post.title}</h3>
                                <p>{post.author}</p>
                                <p>{post.writingTime}</p>
                            </div>
                     </div>
                ))}
            </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'right'}}>
                    게시물 수
                    <select value={selected}
                     onChange={handleSelect}>
                        <option value="1">3개</option>
                        <option value="2">5개</option>
                        <option value="3">10개</option>
                    </select>
                </div>
            <div className="PageButton">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
            </div>

        </div>
    )   
}
export default Board;