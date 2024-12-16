// document.addEventListener("DOMContentLoaded", () => {
//     ymaps.ready(init);

//     function init() {
//         var myMap = new ymaps.Map("map", {
//             center: [55.7282, 37.6915],
//             zoom: 16,
//             controls: ["zoomControl", "typeSelector"]
//         });
//         var myPlacemark = new ymaps.Placemark([55.7282, 37.6915], {
//         }, {
//             iconLayout: 'default#image',
//             iconImageHref: 'assets/images/map/fluent_location-28-filled.png', 
//             iconImageSize: [30, 30],
//             iconImageOffset: [-15, -30] 
//         });

//         myMap.geoObjects.add(myPlacemark);

//         var addressDiv = document.createElement('div');
//         addressDiv.className = 'address-label';
//         addressDiv.innerHTML = 'Москва, ул. Талалихина, 41 ст.2';
        
//         myMap.container.getElement().appendChild(addressDiv);

//         function updateAddressPosition() {
//             var coords = myPlacemark.geometry.getCoordinates();
//             var pixelCoords = myMap.projection.toGlobalPixels(coords, myMap.getZoom());
//             addressDiv.style.left = pixelCoords[0] + 'px';
//             addressDiv.style.top = (pixelCoords[1] - 30) + 'px'; 
//         }

//         updateAddressPosition();

//         myPlacemark.events.add('drag', updateAddressPosition);
//         myPlacemark.events.add('dragend', updateAddressPosition);
//     }
// });
