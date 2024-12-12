ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [55.7282, 37.6915],
            zoom: 16,
            controls: ["zoomControl", "typeSelector"]
        });

        // Создаем кастомную метку
        var myPlacemark = new ymaps.Placemark([55.7282, 37.6915], {
            // Здесь можно добавить любую информацию, если нужно
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'assets/images/map/fluent_location-28-filled.png', // Укажите путь к вашей иконке
            iconImageSize: [30, 30], // Размер вашей иконки
            iconImageOffset: [-15, -30] // Смещение иконки
        });

        // Добавляем метку на карту
        myMap.geoObjects.add(myPlacemark);

        // Создаем элемент для адреса
        var addressDiv = document.createElement('div');
        addressDiv.className = 'address-label';
        addressDiv.innerHTML = 'Москва, ул. Талалихина, 41 ст.2';
        
        // Добавляем элемент на карту
        myMap.container.getElement().appendChild(addressDiv);

        // Обновляем позицию адреса при изменении координат метки
        function updateAddressPosition() {
            var coords = myPlacemark.geometry.getCoordinates();
            var pixelCoords = myMap.projection.toGlobalPixels(coords, myMap.getZoom());
            addressDiv.style.left = pixelCoords[0] + 'px';
            addressDiv.style.top = (pixelCoords[1] - 30) + 'px'; // Смещение вверх
        }

        // Вызываем функцию для первоначальной установки позиции
        updateAddressPosition();

        // Обновляем позицию адреса при перемещении метки
        myPlacemark.events.add('drag', updateAddressPosition);
        myPlacemark.events.add('dragend', updateAddressPosition);
    }