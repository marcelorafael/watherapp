// ?key=34664f77&lat=-23.682&lon=-46.875&user_ip=remote
import React, {useState, useEffect} from 'react';
// import { View, Text } from 'react-native';
import api from './api';

const GetDatas = async () => {
    
    let response = await api.get('?key=34664f77&lat=-1.455833&lon=%20-48.503887&user_ip=remote');
    let data = response.data;

    return (
        data
    );
}




export default GetDatas();