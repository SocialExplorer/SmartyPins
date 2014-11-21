var map;
var mapModule = angular.module('mapModule', ['ui.bootstrap']);
mapModule.service('mapService', function () {
    var servers = [
        'http://tiles2a.socialexplorer.com/geoserver/data/',
        'http://tiles2b.socialexplorer.com/geoserver/data/',
        'http://tiles2c.socialexplorer.com/geoserver/data/',
        'http://tiles2d.socialexplorer.com/geoserver/data/'
    ];

    var mapOptions = {fadeAnimation: true, minZoom: 1, maxZoom: 16, pointsLimit: 15000, servers: servers, backgroundColor: '#abcae0', hw: true};
    project = new MAPSPICE.Project(mapProject, mapOptions);
    project.container = "map";
    map = project;
    map = project.convertToMapspiceClientSide();
    map.refresh();

var markerIcon = new L.Icon({
        iconUrl: 'images/marker-icon.png', 
        iconSize: [38, 70],
        iconAnchor: [17, 70],
        popupAnchor: [-3, -76],
        shadowUrl: 'images/marker-shadow.png',
        shadowSize: [50, 80],
        shadowAnchor: [12, 80]

    });
    marker = new L.marker([50.5, 30.5], {icon: markerIcon, draggable: true});
    marker.addTo(map.getLmap());
    var correctMarkerIcon = new L.Icon({
        iconUrl: 'images/marker-correct-answer-icon.png', 
        iconSize: [38, 70],
        iconAnchor: [17, 70],
        popupAnchor: [-3, -76],
        shadowUrl: 'images/marker-shadow.png',
        shadowSize: [50, 80],
        shadowAnchor: [12, 80]
    });
    var polyline = L.polyline([[0, 0], [0,0]], {color: 'red'});
    correctAnswerMarker = new L.marker([50.5, 30.5], {icon: correctMarkerIcon, draggable: false});

        return {
            getMap: function () {
                return map;
            },
            getMarker: function() {
                return marker;
            }, 
            hideMarker: function() {
                map.getLmap().removeLayer(marker);
            }, 
            showMarker: function() {
                map.getLmap().addLayer(marker);

            }, 
            addLine: function(latLng1, latLng2){
                polyline = L.polyline([latLng1, latLng2], {color: 'red'}).addTo(map.getLmap());
            },
            removeLine: function(){
                map.getLmap().removeLayer(polyline);
            },
            addCorrectAnswerMarker: function(latLng){
                correctAnswerMarker.setLatLng(latLng);
                correctAnswerMarker.addTo(map.getLmap());
            },
            removeCorrectAnswerMarker: function (){
                map.getLmap().removeLayer(correctAnswerMarker);
            }
        };
    });
