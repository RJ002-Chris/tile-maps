mapboxgl.accessToken =
    // 'pk.eyJ1IjoiY2hyaXMxMTJ0c2FvIiwiYSI6ImNsc2h3ODRtazI5OGcyam8yaWNobWphNDYifQ.Fe2rDsqhWw2mE5UIR6JNQQ';
    'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // style: 'mapbox://styles/chris112tsao/clshv7ebu004201q1crrne8xz',
    style: 'mapbox://styles/mapbox/light-v10',
    zoom: 8, // starting zoom
    center: [136.95249651606736, 37.30736284820734] // starting center
});

map.on('load', () => { //simplifying the function statement: arrow with brackets to define a function
    map.addSource('dark-tiles', {
        'type': 'raster',
        'tiles': [
            'assets/tile sets 1/{z}/{x}/{y}.png'
        ],
        'tileSize': 256,
        'attribution': 'dark-themed map tiles designed by Christian Tsao'
    });

    map.addSource('jpearthquake-tiles', {
        'type': 'raster',
        'tiles': [
            'assets/tile sets 2/{z}/{x}/{y}.png'
        ],
        'tileSize': 256,
        'attribution': 'Noto earthquake proportional symbol map designed by Christian Tsao'
    });

    map.addSource('jpdarkearth-tiles', {
        'type': 'raster',
        'tiles': [
            'assets/tile sets 3/{z}/{x}/{y}.png'
        ],
        'tileSize': 256,
        'attribution': 'Noto earthquake and dark tiles designed by Christian Tsao'
    });

    map.addSource('uw-tiles', {
        'type': 'raster',
        'tiles': [
            'assets/tile sets 4/{z}/{x}/{y}.png'
        ],
        'tileSize': 256,
        'attribution': 'UW-themed map tiles designed by Christian Tsao'
    });

    map.addLayer({
        'id': 'dark',
        'type': 'raster',
        'layout': {
            'visibility': 'none'
        },
        'source': 'dark-tiles'
    });
    
    map.addLayer({
        'id': 'earthquake',
        'type': 'raster',
        'layout': {
            'visibility': 'none'
        },
        'source': 'jpearthquake-tiles'
    });

    map.addLayer({
        'id': 'darkearth',
        'type': 'raster',
        'layout': {
            'visibility': 'none'
        },
        'source': 'jpdarkearth-tiles'
    });

    map.addLayer({
        'id': 'uw',
        'type': 'raster',
        'layout': {
            'visibility': 'none'
        },
        'center':[-122.3134476561778, 47.653306312054106],
        'source': 'uw-tiles'
    });

});


// After the last frame rendered before the map enters an "idle" state.
map.on('idle', () => {
    // If these all 4 layers were not added to the map, abort
    if (!map.getLayer('dark') || !map.getLayer('earthquake') || !map.getLayer('darkearth') || !map.getLayer('uw')) {
        return;
    }

    // Enumerate ids of the layers.
    const toggleableLayerIds = ['dark', 'earthquake', 'darkearth', 'uw'];

    // Set up the corresponding toggle button for each layer.
    for (const id of toggleableLayerIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
            continue;
        }

        // Create a link.
        const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = id;
        link.className = 'inactive';

        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
            const clickedLayer = this.textContent;
            // preventDefault() tells the user agent that if the event does not get explicitly handled, 
            // its default action should not be taken as it normally would be.
            e.preventDefault();
            // The stopPropagation() method prevents further propagation of the current event in the capturing 
            // and bubbling phases. It does not, however, prevent any default behaviors from occurring; 
            // for instance, clicks on links are still processed. If you want to stop those behaviors, 
            // see the preventDefault() method.
            e.stopPropagation();

            const visibility = map.getLayoutProperty(
                clickedLayer,
                'visibility'
            );

            // Toggle layer visibility by changing the layout object's visibility property.
            // if it is currently visible, after the clicking, it will be turned off.
            if (visibility === 'visible') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                this.className = '';
            } else { //otherise, it will be turned on.
                this.className = 'active';
                map.setLayoutProperty(
                    clickedLayer,
                    'visibility',
                    'visible'
                );
            }

            if (clickedLayer === 'uw') {
                map.setCenter([-122.3134476561778, 47.653306312054106]);
                map.setZoom(12);
            }
        };

        // in the menu place holder, insert the layer links.
        const layers = document.getElementById('menu');
        layers.appendChild(link);
    }
});