import React, {useState} from 'react';
import {useDaumPostcodePopup} from 'react-daum-postcode';
import {Map,MapMarker} from 'react-kakao-maps-sdk';

function MyMap3(){

    const [position, setPosition] = useState(null);
    const [address, setAddress] = useState("");

    let scriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'

    const open = useDaumPostcodePopup(scriptUrl);

    //주소-좌표 변환 객체를 생성
    let geoCoder = new window.kakao.maps.services.Geocoder();


    const handleComplete = (data) => {
        let addr = data.address;
        console.log("주소" , addr);

        setAddress(addr);
        geoCoder.addressSearch(addr,function(results,status){
            // 정상적으로 검색이 완료됐으면
            if(status=== window.kakao.maps.services.Status.OK){
                //const bounds = new window.kakao.maps.LatLngBounds();
                let result = results[0];
                let center = {
                    lat : result.y,
                    lng : result.x
                }
                setPosition(center);
                console.log(center)
            }     
        }
    )}
    const handleClick = () => {
        open({ onComplete: handleComplete });
        };
    console.log(position)
    return(
        <div>
        <div>
            <input type='text' value={address} placeholder='주소' readOnly></input>
            <input type='button' value='주소검색' onClick={handleClick}></input>
        </div>
        {position !== null &&(
            <Map
            center={position}
            style={{ width: '600px', height: '600px' }}
            level={3}
            >
            <MapMarker 
            position={position}/>
            </Map>
            
        

        
    )}
    </div>
    )
}
export default MyMap3;