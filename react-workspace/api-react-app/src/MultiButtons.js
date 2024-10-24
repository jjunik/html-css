import { useNavigate } from "react-router-dom";

function MultiButtons(){
    const navigate = useNavigate();
    
    const handleButtonClick = (event) =>{

        const buttonId = event.target.id;

        switch(buttonId){
            case 'address':
                navigate('/address');
                break;
            case 'bookSearch':
                navigate('/search');
                break;
        }
    }
    
    return(
        <div>
            <button id="address" onClick={handleButtonClick}>주소 찾기 api</button>
            <button id="bookSearch" onClick={handleButtonClick}>도서 찾기 api</button>
            <button id="newsSearch" onClick={handleButtonClick}>뉴스 찾기api</button>
        </div>
    );

}
export default MultiButtons