ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2154").setExtent([1010502.908387, 6764990.354604, 1015295.302811, 6768127.730566]);
var wms_layers = [];

var lyr_PlanIGNv2_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r",
    attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Plan IGN v2",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGNv2_0, 0]);
var lyr_OpenStreetMapOSMstyleDsatur_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://osm.datagrandest.fr/mapcache",
    attributions: ' ',
                              params: {
                                "LAYERS": "faded",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "OpenStreetMap - OSM style Désaturé",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OpenStreetMapOSMstyleDsatur_1, 0]);
var lyr_Photographiesariennes2018_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r",
    attributions: ' ',
                              params: {
                                "LAYERS": "ORTHOIMAGERY.ORTHOPHOTOS2018",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Photographies aériennes 2018",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Photographiesariennes2018_2, 0]);
var format_CCRG_3 = new ol.format.GeoJSON();
var features_CCRG_3 = format_CCRG_3.readFeatures(json_CCRG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_CCRG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCRG_3.addFeatures(features_CCRG_3);
var lyr_CCRG_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCRG_3, 
                style: style_CCRG_3,
                interactive: true,
                title: '<img src="styles/legend/CCRG_3.png" /> CCRG'
            });
var format_Communes_4 = new ol.format.GeoJSON();
var features_Communes_4 = format_Communes_4.readFeatures(json_Communes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Communes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_4.addFeatures(features_Communes_4);
var lyr_Communes_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Communes_4, 
                style: style_Communes_4,
                interactive: true,
                title: '<img src="styles/legend/Communes_4.png" /> Communes'
            });
var format_Sites_5 = new ol.format.GeoJSON();
var features_Sites_5 = format_Sites_5.readFeatures(json_Sites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Sites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sites_5.addFeatures(features_Sites_5);
var lyr_Sites_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sites_5, 
                style: style_Sites_5,
                interactive: true,
    title: 'Sites<br />\
    <img src="styles/legend/Sites_5_0.png" /> Site de production<br />\
    <img src="styles/legend/Sites_5_1.png" /> Villa<br />\
    <img src="styles/legend/Sites_5_2.png" /> Cité ouvrière<br />'
        });

lyr_PlanIGNv2_0.setVisible(true);lyr_OpenStreetMapOSMstyleDsatur_1.setVisible(true);lyr_Photographiesariennes2018_2.setVisible(true);lyr_CCRG_3.setVisible(true);lyr_Communes_4.setVisible(true);lyr_Sites_5.setVisible(true);
var layersList = [lyr_PlanIGNv2_0,lyr_OpenStreetMapOSMstyleDsatur_1,lyr_Photographiesariennes2018_2,lyr_CCRG_3,lyr_Communes_4,lyr_Sites_5];
lyr_CCRG_3.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', });
lyr_Communes_4.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', });
lyr_Sites_5.set('fieldAliases', {'Commune': 'Commune', 'Nom': 'Nom', 'Type': 'Type', 'Infos supp': 'Infos supp', 'Autres inf': 'Autres inf', 'Statut': 'Statut', 'Photo': 'Photo', 'Source': 'Source', });
lyr_CCRG_3.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', });
lyr_Communes_4.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', });
lyr_Sites_5.set('fieldImages', {'Commune': 'TextEdit', 'Nom': 'TextEdit', 'Type': 'TextEdit', 'Infos supp': 'TextEdit', 'Autres inf': 'TextEdit', 'Statut': 'TextEdit', 'Photo': 'ExternalResource', 'Source': 'TextEdit', });
lyr_CCRG_3.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', });
lyr_Communes_4.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', });
lyr_Sites_5.set('fieldLabels', {'Commune': 'no label', 'Nom': 'header label', 'Type': 'no label', 'Infos supp': 'no label', 'Autres inf': 'no label', 'Statut': 'no label', 'Photo': 'no label', 'Source': 'no label', });
lyr_Sites_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});