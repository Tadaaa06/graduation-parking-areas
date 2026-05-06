var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_1, 
                style: style_building_1,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_ParkingAreas_2 = new ol.format.GeoJSON();
var features_ParkingAreas_2 = format_ParkingAreas_2.readFeatures(json_ParkingAreas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkingAreas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkingAreas_2.addFeatures(features_ParkingAreas_2);
var lyr_ParkingAreas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkingAreas_2, 
                style: style_ParkingAreas_2,
                popuplayertitle: ' Parking Areas',
                interactive: true,
                title: '<img src="styles/legend/ParkingAreas_2.png" />  Parking Areas'
            });
var format_roads_3 = new ol.format.GeoJSON();
var features_roads_3 = format_roads_3.readFeatures(json_roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_3.addFeatures(features_roads_3);
var lyr_roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_3, 
                style: style_roads_3,
                popuplayertitle: 'roads',
                interactive: true,
                title: '<img src="styles/legend/roads_3.png" /> roads'
            });
var format_landuse_4 = new ol.format.GeoJSON();
var features_landuse_4 = format_landuse_4.readFeatures(json_landuse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_4.addFeatures(features_landuse_4);
var lyr_landuse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse_4, 
                style: style_landuse_4,
                popuplayertitle: 'landuse',
                interactive: true,
                title: '<img src="styles/legend/landuse_4.png" /> landuse'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_ParkingAreas_2.setVisible(true);lyr_roads_3.setVisible(true);lyr_landuse_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_ParkingAreas_2,lyr_roads_3,lyr_landuse_4];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tower:type': 'tower:type', 'man_made': 'man_made', 'amenity': 'amenity', 'tourism': 'tourism', });
lyr_ParkingAreas_2.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', });
lyr_roads_3.set('fieldAliases', {'id': 'id', });
lyr_landuse_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'leaf_type': 'leaf_type', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'tower:type': '', 'man_made': '', 'amenity': '', 'tourism': '', });
lyr_ParkingAreas_2.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', });
lyr_roads_3.set('fieldImages', {'id': 'TextEdit', });
lyr_landuse_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', 'leaf_type': 'TextEdit', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'tower:type': 'no label', 'man_made': 'no label', 'amenity': 'no label', 'tourism': 'no label', });
lyr_ParkingAreas_2.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', });
lyr_roads_3.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_landuse_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'leaf_type': 'header label - visible with data', });
lyr_landuse_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});