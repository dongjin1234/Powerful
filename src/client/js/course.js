
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
    center: new kakao.maps.LatLng(35.875406020003766, 128.68148063111425), // 지도의 중심좌표
    level: 5 // 지도의 확대 레벨 
}; 

const loadingCircle = document.querySelector(".loading-wrap");
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
if(map){
    loadingCircle.classList.add("hidden");
}

const currentBtn = document.querySelector(".currentPosition");

currentBtn.addEventListener("click", ()=>{
    loadingCircle.classList.remove("hidden");

    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
    if (navigator.geolocation) {
        
        loadingCircle.classList.add("hidden");

        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
            var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
            
            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);
            
        });
        
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        loadingCircle.classList.add("hidden");
        var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
        message = 'geolocation을 사용할수 없어요..'
        displayMarker(locPosition, message);
    } 
});


// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {
  
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    
    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);
    
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);      
}    




const courseBtn = document.getElementsByClassName("courseBtn");
const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

let imageSize = new kakao.maps.Size(24, 35);
let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
let markers = [];

for( btns of courseBtn) {
    btns.addEventListener('click', function(e){
        
        let target = e.currentTarget;
        let positions = document.querySelectorAll(`.${e.currentTarget.dataset.class}`);
        let removeClass = document.querySelectorAll(".hidden");
        if( target.dataset.class != "current"){
            
            if(document.querySelector(".display")){
                document.querySelector(".display").classList.remove("display");
                if(document.querySelectorAll(".show")){
                    for(const dellist of Object.values(removeClass)){
                        dellist.classList.remove("show");         
                    }
                }
            }
            for(const list of Object.values(positions)){
                list.classList.add("show");         
            }
            const displayList = document.querySelector(`.place-list`);
            setTimeout(()=>{
                displayList.classList.add("display");
            },300); 
            
        }
        
        hideMarkers();
        for (var i = 0; i < positions.length; i ++) {
            addMarker(new kakao.maps.LatLng(positions[i].dataset.lat, positions[i].dataset.lon))
        }
        showMarkers();
    })
}

// 마커를 생성하고 지도위에 표시하는 함수입니다
function addMarker(position) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: position,
        image : markerImage
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    // 생성된 마커를 배열에 추가합니다

    markers.push(marker);
}

// 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
function setMarkers(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }            
}

// "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
function showMarkers() {
    setMarkers(map)    
}

// "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
function hideMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    };   
    markers = [];
}




