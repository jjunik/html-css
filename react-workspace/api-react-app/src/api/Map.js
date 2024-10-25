import React, {useState} from 'react'
import {Map, MapInfoWindow,MapMarker} from 'react-kakao-maps-sdk';

function MyMap(){
    
    //지도의 중심 좌표
    const[result, setResult] = useState("");

    const[markers, setMarkers] = useState([]);

    // 활성화 된 마커의  id를 관리하는 state
    const[activeMarker, setActiveMarker] = useState(null);

    const center = {
        lat:33.450701, // 위도 좌표
        lng:126.570667 // 경도 좌표
    }

    const handleMapClick = (event,MouseEvent) => {
            const latlang = MouseEvent.latLng
            setResult(`클릭한 위치의 위도는 ${latlang.getLat()}이고, 경도는 ${latlang.getLng()} 입니다`)
            const newMarker = {
                id:markers.length,
                position : {
                    lat: latlang.getLat(),
                    lng: latlang.getLng()
                },
                info:`마커 위치: (${latlang.getLat()},${latlang.getLng()})`
            }
            setMarkers([...markers, newMarker]);
        }
    
        //  마커에 마우스를 올렸을 때 인포윈도우 활성화 하기
        const handleMouseOver = (id) => {
            setActiveMarker(id)
        }

        //마커에 마우스를 뗐을 때 인포윈도우 비활성화
        const handleMouseOut = () =>{
            setActiveMarker(null
            )
        }

    return(
        <div>
            <Map
                center={center} // 지도 중심 좌표
                style={{width:'600px', height:'600px'}} // 지도의 너비와 높이
                level={3} // 지도 확대 정도 숫자가 작을수록 크게 , 클수록 작게보임
                onClick={handleMapClick} // 지도에 클릭 이벤트 핸들러
                >
                    {markers.map(marker =>(
                        <MapMarker
                        key={marker.id}
                        position={marker.position}
                        onClick={() => handleMouseOver(marker.id)}
                        onMouseOut={handleMouseOut}
                        >
                            {activeMarker === marker.id && (
                                    <div style={{padding:"5px", color:"#000"}}>
                                        {marker.info}
                                    </div>
                                )}
                        </MapMarker>
                    ))}
                    







                {/* 마커는 좌표 위에 생성이 된다. 
                <MapMarker
                    position={position}
                    // {position ?? center} position에 값이 없으면  center를 사용해라
                    // 

                인포윈도우 생성하기*/}
            <MapInfoWindow   인포 윈도우를 생성하고 지도에 표시한다 
                position = {center} // 인포 윈도우가 표시될 위치
                removable = {true}>  {/*인포윈도우를 닫을 수 있는 x버튼 표시   */}
                
                <div style={{padding:'5px', color:"#000"}}>Hello World</div>
            </MapInfoWindow>  
                

            </Map>
            <p>
                지도를 클릭해주세요!
            </p>
            <p id="result">{result}</p>
        </div>
    )
}
export default MyMap;