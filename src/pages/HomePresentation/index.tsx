import Home from '../../screens/Home';


const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

import Night from '../../assets/night.jpg'
import Afternoon from '../../assets/afternoon.jpg'
import Afternoon2 from '../../assets/afternoon-1.jpg'
import Morning from '../../assets/morning.jpg'
import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

import GetDatas from '../../services/ConnectApi'
import { AxiosResponse } from 'axios';

export default function HomePresentation() {
  const [data, setData] = useState<AxiosResponse | any>(null);
  const [location, setLocation] = useState<any>(null);

  async function loadData() {

    await GetDatas(location?.coords?.latitude, location?.coords?.longitude).then(res => setData(res));

  };

  useEffect(() => {

    Geolocation.getCurrentPosition(info => setLocation(info));

    loadData();
  }, [data]);

  console.log(location);

  return (
    <Home
      title='Belém-PA'
      backgroundImg={Night}
    />
  );
}