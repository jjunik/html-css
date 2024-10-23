import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [movie, setMovie] = useState([]);
  // 컴포넌트가 렌더링 된 후에 실행된다.
  // useEffect(() => {
  // 렌더링에 영향을 주지않는 코드들 
  // },[])

  let options = {
    headers:{
      "Content-Type":"application/json"
    },
    url : 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101',
    method : 'get'
  }

  const handleClick = () => {
    // 버튼이 눌리기 전에는 절대 실행이 안됨
    axios(options)
    .then(response => {
      console.log(response.data);
    })
    // alert('버튼이 클릭되었습니다')
  }

  const movieTable =(
    <table border="1">
      <tr>
        <td>제목</td>
        <td>개봉날짜</td>
        <td>박스오피스순위</td>
        <td>관객수</td>
      </tr>
      <tr>
        <td>{movie.movieNm}</td>
        <td>{movie.openDt}</td>
        <td>{movie.rank}</td>
        <td>{movie.audiAcc}</td>
      </tr>
    </table>
  )

  return (
    <div className="App">
      <button onClick={handleClick}>일별 박스오피스 내용 가져오기</button>
    </div>
  );
}

export default App;
