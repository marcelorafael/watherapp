import Home from '../../screens/Home';


const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

import Night from '../../assets/night.jpg'
import Afternoon from '../../assets/afternoon.jpg'
import Afternoon2 from '../../assets/afternoon-1.jpg'
import Morning from '../../assets/morning.jpg'

import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';

import GetDatas from '../../services/ConnectApi'
import { AxiosResponse } from 'axios';

export default function HomePresentation() {
  const [data, setData] = useState<AxiosResponse | any>(null);
  const [location, setLocation] = useState<any>(null);

  async function loadData() {

    await GetDatas(location?.coords?.latitude, location?.coords?.longitude).then(res => setData(res));

  };

  async function getLocation() {
    // Configuração do Geolocation
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false, // Solicita permissão automaticamente
      authorizationLevel: 'whenInUse', // Acesso apenas quando o app estiver em uso
      enableBackgroundLocationUpdates: false, // Não atualiza em segundo plano
      locationProvider: 'auto', // Escolhe o melhor provedor automaticamente
    });

    // Solicitação de localização (exemplo)
    Geolocation.getCurrentPosition(
      (position) => {
        setData(position);
      },
      (error) => {
        console.log('Erro ao obter localização:', error.message);
      },
      // { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

  }

  useEffect(() => {

    moment.locale("pt-br");
    console.log(moment().format('LT'))

    getLocation()

    loadData();
  }, []);

  return (
    <Home
      title={data?.results?.city}
      condition={data?.results?.description}
      date={data?.results?.date}
      temp={data?.results?.temp}
      conditionImg={data?.results?.condition_slug}
      moonImg={data?.results?.moon_phase}
      backgroundImg={Morning}
      dataFooter={data?.results?.forecast}
      currently={data?.results?.currently}
    />
  );
}