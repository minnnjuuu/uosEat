window.onload = function () {
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.583801, 127.059187), // 서울시립대 좌표
        zoom: 15
    });
    // 맛집 위치 정보 배열
    var locations = [
        {
            name: "봄솔",
            lat: 37.5838673,
            lng: 127.0541562
        },
        {
            name: "와인처럼",
            lat: 37.5832404,
            lng: 127.0531363
        },
        {
            name: "해피디시클럽",
            lat: 37.5833127,
            lng: 127.0548163
        },
        {
            name: "피자 파스토",
            lat: 37.5890622,
            lng: 127.0609544
        }
    ];

    locations.forEach(function (loc) {
        // 마커 생성
        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(loc.lat, loc.lng),
            map: map
        });


    });
};

function toggle(selectedItem) {
    const items = document.querySelectorAll("li");
    items.forEach(item => {
        if (item !== selectedItem) {
            item.classList.remove("expanded");
        }
    });
    selectedItem.classList.toggle("expanded");
}