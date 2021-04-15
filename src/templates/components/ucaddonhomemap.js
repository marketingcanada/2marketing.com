import GoogleMapReact from 'google-map-react';
import React, { useState } from "react";
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import pin from "./../../images/pin.png";

const googleMapKey = process.env.GATSBY_GOOGLE_MAP_KEY;
const Map = styled.div`
    height: 500px;
    @media only screen and (max-width: 768px) {
      height: 200px;
    }
    margin-top: 50px;
    & .pinLabel{
        background: #ffffff;
    }
`;

const Ucaddonhomemap = (settings) => {
  
    const[markers] = useState([]);
    const[thisMap, setthisMap] = useState();
    const DefaultLocation = settings.uc_items[0];
    const locations = settings.uc_items;

    const lat = DefaultLocation.latitude;
    const lng = DefaultLocation.longitude;

    const zoom = isMobile ? 2 : settings.zoom || 5;
    //console.log(width);

    function createMapOptions(maps) {
        return {
          panControl: false,
          mapTypeControl: false,
          scrollwheel: false,
          disableDefaultUI: true,
          styles: [ { "elementType": "geometry", "stylers": [ { "color": "#e5e5e5" } ] }, { "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#ffffff" } ] } ]
        }
    }
    function createMarkers(map, maps, markers, locations){

        setthisMap(map);
    
        locations.forEach(location => {
            const {latitude, longitude, title} = location;
            const marker = new maps.Marker({
                position: {lat: latitude, lng: longitude},
                map: map,
                icon: {
                    url: pin
                },
                location
            });
            // create info window for each marker   
            const iw = new maps.InfoWindow({
              content: `<h5>${title}</h5>`
            })
    
            marker.iw = iw;
    
            marker.addListener('click', function() {
                // hide all other info boxes on click
                markers.forEach(marker => {
                    marker.iw.close();
                })
                // make clicked info window always opened
                marker.iw.open(thisMap, marker);
            });
              // push this marker to the markers array on the state
              markers.push(marker);
        })
    }

  return (
    <Map className={settings._css_classes ? settings._css_classes : ''} >
		<GoogleMapReact
            bootstrapURLKeys={{
                key: [googleMapKey]
            }}
            options={createMapOptions}
            defaultCenter={{lat: lat, lng: lng}}
            defaultZoom={ zoom }
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => createMarkers(map, maps, markers, locations)}
            />
	</Map>
  )
};

export default Ucaddonhomemap;
