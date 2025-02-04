var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_1 = new ol.format.GeoJSON();
var features_lab1_1 = format_lab1_1.readFeatures(json_lab1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_1.addFeatures(features_lab1_1);
var lyr_lab1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_1, 
                style: style_lab1_1,
                popuplayertitle: 'lab 1',
                interactive: true,
                title: '<img src="styles/legend/lab1_1.png" /> lab 1'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Последняя работа — Дороги',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Последняя работа — Дороги'
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
                popuplayertitle: 'Последняя работа — Дома',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Последняя работа — Дома'
            });

lyr_OSMStandard_0.setVisible(true);lyr_lab1_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_lab1_1,lyr__2,lyr__3];
lyr_lab1_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'id': 'id', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tracktype': 'tracktype', 'service': 'service', 'layer': 'layer', 'bridge': 'bridge', 'trail_visibility': 'trail_visibility', 'width': 'width', 'smoothness': 'smoothness', 'ref': 'ref', 'oneway': 'oneway', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'motor_vehicle': 'motor_vehicle', 'maxspeed:practical': 'maxspeed:practical', 'lanes': 'lanes', 'horse': 'horse', 'foot': 'foot', 'cycleway': 'cycleway', 'bicycle': 'bicycle', 'access': 'access', 'surface': 'surface', 'maxspeed': 'maxspeed', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'ref': 'ref', 'operator': 'operator', 'name': 'name', 'amenity': 'amenity', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'adress': 'adress', });
lyr_lab1_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'id': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'tracktype': '', 'service': '', 'layer': '', 'bridge': '', 'trail_visibility': '', 'width': '', 'smoothness': '', 'ref': '', 'oneway': '', 'name:etymology:wikidata': '', 'name': '', 'motor_vehicle': '', 'maxspeed:practical': '', 'lanes': '', 'horse': '', 'foot': '', 'cycleway': '', 'bicycle': '', 'access': '', 'surface': '', 'maxspeed': '', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'ref': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'building:levels': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'adress': '', });
lyr_lab1_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'id': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tracktype': 'no label', 'service': 'no label', 'layer': 'no label', 'bridge': 'no label', 'trail_visibility': 'no label', 'width': 'no label', 'smoothness': 'no label', 'ref': 'no label', 'oneway': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'motor_vehicle': 'no label', 'maxspeed:practical': 'no label', 'lanes': 'no label', 'horse': 'no label', 'foot': 'no label', 'cycleway': 'no label', 'bicycle': 'no label', 'access': 'no label', 'surface': 'no label', 'maxspeed': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'ref': 'no label', 'operator': 'no label', 'name': 'no label', 'amenity': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'adress': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
