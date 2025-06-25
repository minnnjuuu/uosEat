window.onload = function () {
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.583801, 127.059187), // 서울시립대 좌표
        zoom: 15
    });
    // 맛집 위치 정보 배열
    var locations = [
        {
            name: "돈돈",
            lat: 37.5843816,
            lng: 127.0525634
        },
        {
            name: "신락원",
            lat: 37.5788848,
            lng: 127.0571820
        },
        {
            name: "현대반점",
            lat: 37.5896042,
            lng: 127.0518226
        },
        {
            name: "샹츠마라",
            lat: 37.5833127,
            lng: 127.0548163
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