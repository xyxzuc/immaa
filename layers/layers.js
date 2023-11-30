var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });
var format_Peta_Geologi_1 = new ol.format.GeoJSON();
var features_Peta_Geologi_1 = format_Peta_Geologi_1.readFeatures(json_Peta_Geologi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peta_Geologi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peta_Geologi_1.addFeatures(features_Peta_Geologi_1);
var lyr_Peta_Geologi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_Geologi_1, 
                style: style_Peta_Geologi_1,
                interactive: true,
                title: '<img src="styles/legend/Peta_Geologi_1.png" /> Peta_Geologi'
            });

lyr_2gisMap_0.setVisible(true);lyr_Peta_Geologi_1.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr_Peta_Geologi_1];
lyr_Peta_Geologi_1.set('fieldAliases', {'SYMBOLS': 'SYMBOLS', 'NAME_BI': 'NAME_BI', 'CLASS_LITH': 'CLASS_LITH', });
lyr_Peta_Geologi_1.set('fieldImages', {'SYMBOLS': '', 'NAME_BI': '', 'CLASS_LITH': '', });
lyr_Peta_Geologi_1.set('fieldLabels', {'SYMBOLS': 'no label', 'NAME_BI': 'no label', 'CLASS_LITH': 'no label', });
lyr_Peta_Geologi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});