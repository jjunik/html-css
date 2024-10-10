import React, {useState, useEffect} from 'react';
import { call } from './service/ApiService';


function P_info(){

    const [items, setItems] = useState([]);

    const [open, setOpen] = useState(true);

    useEffect( () => {
        call("/product","GET")
        .then(result => {
            setItems(result.data);
        })
    },[])
    
    const onButtonClick = () => {
        setOpen(false);
    }


    let productItems = items.length > 0 &&(
        <table border="1">
            
            <tr>
                <th>상품 번호</th>
                <th>상품 이름</th>
                <th>상품 재고</th>
                <th>상품 가격</th>
                <th>등록 날짜</th>
                <th>수정 날짜</th>
            </tr>    
        
        {items.map(item => (
        <tr>
            <td>item.id</td>
            <td>item.name</td>
            <td>item.stock</td>
            <td>item.price</td>
            <td>item.addDate</td>
            <td>item.editDate</td>
        </tr>
        ))}
        </table>
    )    
    return(
        <div className='container'>
            <button type="Button" onClick={onButtonClick}>상품추가</button>
        {productItems}
        </div>
    )
}
export default P_info;