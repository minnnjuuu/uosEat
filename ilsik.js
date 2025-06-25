window.onload = function () {
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.583801, 127.059187), // 서울시립대 좌표
        zoom: 15
    });
    // 맛집 위치 정보 배열
    var locations = [
        {
            name: "스시마루",
            lat: 37.5877132,
            lng: 127.0605953
        },
        {
            name: "카츠정연",
            lat: 37.5900482,
            lng: 127.0546882
        },
        {
            name: "빨간대문",
            lat: 37.5856899,
            lng: 127.0607938
        },
        {
            name: "도토리군버섯양",
            lat: 37.5839449,
            lng: 127.0535993
        },
        {
            name: "반지하돈부리",
            lat: 37.5853096,
            lng: 127.0608349
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