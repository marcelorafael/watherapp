// ?key=34664f77&lat=-23.682&lon=-46.875&user_ip=remote
import React, {useState, useEffect} from 'react';
// import { View, Text } from 'react-native';
import api from './api';

const GetDatas = async (lat: number,lon: number) => {
    
    let response = await api.get(`https://api.hgbrasil.com/weather?key=615483e0&lat=${Number(lat)},&lon=${Number(lon)}&user_ip=remote`);
    let data = response.data;

    return (
        data
    );
}



export default GetDatas;