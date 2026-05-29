var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'гРАНИЦА',
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> гРАНИЦА'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Дорожные знаки',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Дорожные знаки'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_OSMStandard_1,lyr__2,lyr__3];
lyr__2.set('fieldAliases', {'FID': 'FID', });
lyr__3.set('fieldAliases', {'id': 'Номер по таблице:', 'NAME': 'Название знака:', 'name_new': 'Правильное название:', 'status': 'Статус:', 'foto': 'Фото (в том числе с ошибкой):', 'foto_2': 'Фото (с другой стороны знака или исправленное):', 'who': 'Принадлежность дороги:', });
lyr__2.set('fieldImages', {'FID': 'TextEdit', });
lyr__3.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'name_new': 'TextEdit', 'status': 'TextEdit', 'foto': 'TextEdit', 'foto_2': 'TextEdit', 'who': 'TextEdit', });
lyr__2.set('fieldLabels', {'FID': 'no label', });
lyr__3.set('fieldLabels', {'id': 'hidden field', 'NAME': 'inline label - always visible', 'name_new': 'inline label - visible with data', 'status': 'inline label - always visible', 'foto': 'inline label - always visible', 'foto_2': 'inline label - visible with data', 'who': 'inline label - always visible', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});