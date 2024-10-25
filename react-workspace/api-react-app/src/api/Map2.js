import React, {useState} from 'react'
import { Map, MapMarker} from 'react-kakao-maps-sdk'


function MyMap2(){
// 검색을 통해 마커 찍기


    const[map, setMap] = useState(null);
    // 사용자가 클릭한 마커의 정보를 저장하는 상태
    const[info, setInfo] = useState([]);

    // 지도에 표시된 마커들의 리스트 상태
    const[markers, setMarkers] = useState([]);

    //생성된 맵 객체를 저장할 상태
    const[keyword, setKeyword] = useState('');

    // 마우스를 올린 마커에 정보를 저장하는 state
    const[hover, setHover] = useState([])


    //카카오 장소 검색 API를 호출하는 함수
    const searchPlaces = (searchKeyword) =>{
        // map 객체와 카카오 지도 API가 로드되지 않으면 함수 종료
        if(!map || !window.kakao || !window.kakao.maps || !window.kakao.maps.services){
            return;
        }
        // 카카오 장소 검색 객체 생성
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(searchKeyword,(data, status) => {
            // 검색이 성공적으로 완료되었을 때
            if(status === window.kakao.maps.services.Status.OK){
                // 지도범위를 설정하기 위한 객체
                // 마커가 보이도록 지도 범위를 설정하기 위한 객체
                const bounds = new window.kakao.maps.LatLngBounds();

                // 검색된 장소 리스트를 마커로 변환
                const newMarkers = data.map(place => ({
                    position : {
                        lat: place.y, // 장소의 위도
                        lng: place.x // 장소의 경도
                    },
                    content: place.place_name, // 마커에 표시할 장소명
                    

                }))
                // 지도 위치를 수정하기위해 bounds 객체에 모든 마커의 좌표를 넣는다
                newMarkers.forEach(marker => bounds.extend(new window.kakao.maps.LatLng(marker.position.lat,marker.position.lng)));

                //마커 리스트 상태를 업데이트
                setMarkers(newMarkers);

                //지도 좌표 재설정하기
                map.setBounds(bounds);
        }else{
            alert('검색결과가 없습니다.')
        }
    })
    }

    const handleSearch = () => {
        if(keyword == ''){
            alert('검색어를 입력해주세요');
            return
        }
        searchPlaces(keyword); // 입력된 검색어로 장소 검색
    }


    return(
        <div>
            <div style={{marginBottom:"10px"}}>
                <input
                    type="text"
                    value={keyword} // 검색어의 상태를 입력창의 값으로 설정
                    onChange={(e) => setKeyword(e.target.value)} // 입력 할 때 마다 검색어 상태를 업데이트
                    placeholder="검색어를 입력하세요" // 입력창에 표시할 힌트 텍스트
                    style={{padding: "5px", marginRight:"5px"}}/>
                <button onClick={handleSearch}>검색</button>
            </div>

            <Map
                center={{
                    lat: 37.566826,
                    lng: 126.9786567
                }}
                style={{
                    width:"100%",
                    height:"350px"
                }}
                level={3}
                onCreate={setMap} // 지도가 생성될 때 호출되는 이벤트 핸들러
                // 이 핸들러는 지도의 초기화가 완료되면 카카오 맵 객체(kakao.maps.map)를
                // 매개변수로 받아 그 객체에 대한 접근 및 추가 설정을 가능하게 한다.
                >
                    {markers.map((marker,index) => (
                        <MapMarker
                            key={`marker=${index}`} // 마커에 고유한 key 설정
                            position={marker.position} // 마커의 위치 설정
                            onMouseOver={() => setInfo(marker)} // 마커 클릭시 마커 정보를 info에 저장
                            onMouseOut={() => setInfo(null)}
                            // onClick={}
                            >
                                {info && info.content === marker.content &&(
                                    <div style={{color:'#000'}}>{marker.content}</div>
                                )}
                        </MapMarker>
                    ))}
                </Map>
        </div>
    )
}

export default MyMap2