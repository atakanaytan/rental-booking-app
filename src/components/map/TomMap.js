
import React, { useEffect, useCallback, useRef } from 'react';
import { useMap } from 'providers/MapProvider';
import './TomMap.scss';

const TomMap = ({location}) => {
    let map = useRef(null);

    const { initMap, requestGeoLocation, setCenter, addMarker } = useMap();

    const getGeolocation = useCallback((location) => {
      location && 
      requestGeoLocation(location)
        .then(position => {
          setCenter(map.current, position);
          addMarker(map.current, position)  
        })
    }, [requestGeoLocation, map, setCenter, addMarker])

    useEffect(() => {
        getGeolocation(location);
      }, [location, getGeolocation])

      useEffect(() => {
        map.current = initMap();
      }, [initMap])

    return <div id="rentalNow-map"></div>
}

export default TomMap;