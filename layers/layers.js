var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_adm_pasirkaliki_1 = new ol.format.GeoJSON();
var features_adm_pasirkaliki_1 = format_adm_pasirkaliki_1.readFeatures(json_adm_pasirkaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_pasirkaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_pasirkaliki_1.addFeatures(features_adm_pasirkaliki_1);
var lyr_adm_pasirkaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_pasirkaliki_1, 
                style: style_adm_pasirkaliki_1,
                popuplayertitle: "adm_pasirkaliki",
                interactive: true,
                title: '<img src="styles/legend/adm_pasirkaliki_1.png" /> adm_pasirkaliki'
            });
var format_Buffered_2 = new ol.format.GeoJSON();
var features_Buffered_2 = format_Buffered_2.readFeatures(json_Buffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_2.addFeatures(features_Buffered_2);
var lyr_Buffered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_2, 
                style: style_Buffered_2,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_2.png" /> Buffered'
            });
var format_PEMUKIMAN_LN_25K_3 = new ol.format.GeoJSON();
var features_PEMUKIMAN_LN_25K_3 = format_PEMUKIMAN_LN_25K_3.readFeatures(json_PEMUKIMAN_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_LN_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_LN_25K_3.addFeatures(features_PEMUKIMAN_LN_25K_3);
var lyr_PEMUKIMAN_LN_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_LN_25K_3, 
                style: style_PEMUKIMAN_LN_25K_3,
                popuplayertitle: "PEMUKIMAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_LN_25K_3.png" /> PEMUKIMAN_LN_25K'
            });
var format_UTMperindukanvektor_4 = new ol.format.GeoJSON();
var features_UTMperindukanvektor_4 = format_UTMperindukanvektor_4.readFeatures(json_UTMperindukanvektor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMperindukanvektor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMperindukanvektor_4.addFeatures(features_UTMperindukanvektor_4);
var lyr_UTMperindukanvektor_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMperindukanvektor_4, 
                style: style_UTMperindukanvektor_4,
                popuplayertitle: "UTM perindukan vektor",
                interactive: true,
                title: '<img src="styles/legend/UTMperindukanvektor_4.png" /> UTM perindukan vektor'
            });
var format_TitikPerindukanVektor_AuliaKamila_5 = new ol.format.GeoJSON();
var features_TitikPerindukanVektor_AuliaKamila_5 = format_TitikPerindukanVektor_AuliaKamila_5.readFeatures(json_TitikPerindukanVektor_AuliaKamila_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPerindukanVektor_AuliaKamila_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPerindukanVektor_AuliaKamila_5.addFeatures(features_TitikPerindukanVektor_AuliaKamila_5);
var lyr_TitikPerindukanVektor_AuliaKamila_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPerindukanVektor_AuliaKamila_5, 
                style: style_TitikPerindukanVektor_AuliaKamila_5,
                popuplayertitle: "Titik Perindukan Vektor_Aulia Kamila",
                interactive: true,
                title: '<img src="styles/legend/TitikPerindukanVektor_AuliaKamila_5.png" /> Titik Perindukan Vektor_Aulia Kamila'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_adm_pasirkaliki_1.setVisible(true);lyr_Buffered_2.setVisible(true);lyr_PEMUKIMAN_LN_25K_3.setVisible(true);lyr_UTMperindukanvektor_4.setVisible(true);lyr_TitikPerindukanVektor_AuliaKamila_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_adm_pasirkaliki_1,lyr_Buffered_2,lyr_PEMUKIMAN_LN_25K_3,lyr_UTMperindukanvektor_4,lyr_TitikPerindukanVektor_AuliaKamila_5];
lyr_adm_pasirkaliki_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Buffered_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PEMUKIMAN_LN_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_UTMperindukanvektor_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TitikPerindukanVektor_AuliaKamila_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_adm_pasirkaliki_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Buffered_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_PEMUKIMAN_LN_25K_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'REMARK': '', 'SHAPE_Leng': '', });
lyr_UTMperindukanvektor_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_TitikPerindukanVektor_AuliaKamila_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_adm_pasirkaliki_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Buffered_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PEMUKIMAN_LN_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'REMARK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_UTMperindukanvektor_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikPerindukanVektor_AuliaKamila_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikPerindukanVektor_AuliaKamila_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});