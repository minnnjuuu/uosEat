window.onload = function () {
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.583801, 127.059187), // 서울시립대 좌표
        zoom: 15
    });
    // 맛집 위치 정보 배열
    var locations = [
        {
            name: "19고깃집",
            lat: 37.5841858,
            lng: 127.0527696
        },
        {
            name: "온반 한상",
            lat: 37.5864577,
            lng: 127.0608816
        },
        {
            name: "마루한",
            lat: 37.5828352,
            lng: 127.0527699
        },
        {
            name: "옛날집",
            lat: 37.5843705,
            lng: 127.0526865
        }
        ,
        {
            name: "위대한 족보",
            lat: 37.5835735,
            lng: 127.0530871
        }
        ,
        {
            name: "꽃닭",
            lat: 37.5832475,
            lng: 127.0545767
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