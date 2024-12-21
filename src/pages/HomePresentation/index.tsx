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
  const [imageBackroundHome, setImageBackroundHome] = useState<any>(null);

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
        setLocation(position);
      },
      (error) => {
        console.log('Erro ao obter localização:', error.message);
      },
      // { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

  }

  function setBackgorundHome() {
    moment.locale();

    // String recebida
    const timeString = "5:00 PM";

    // Converter a string para um objeto Moment.js
    const time = moment(timeString, "h:mm A");

    // Definir os limites para comparação
    const fivePM = moment("5:00 PM", "h:mm A");
    const sixPM = moment("6:00 PM", "h:mm A");
    const fourFiftyNinePM = moment("4:59 PM", "h:mm A");

    // Verificar condições
    if (time.format("A") === "AM") {
      // console.log("Ação para AM");
      setImageBackroundHome(Morning)
    } else if (time.isBefore(fourFiftyNinePM)) {
      // console.log("Ação para horários até 4:59 PM");
      setImageBackroundHome(Afternoon)
    } else if (time.isSame(fivePM)) {
      // console.log("Ação para o horário exato de 5:00 PM");
      setImageBackroundHome(Afternoon2)
    } else if (time.isAfter(sixPM)) {
      console.log("Ação para horários maiores que 5:59 PM");
      setImageBackroundHome(Night)
    } else {
      console.log("Ação para horários entre 5:01 PM e 5:59 PM");
    }


    // moment.locale();

    // const hourValue = moment().format('LT').split(" ")[0][0];

    // const pmOrAmValue = moment().format('LT').split(" ")[1];

    // if (pmOrAmValue === "AM") {

    //   setImageBackroundHome(Morning)
    //   return
    // }

    // if (pmOrAmValue === "PM" && Number(hourValue) < 4) {

    //   setImageBackroundHome(Afternoon)
    //   return
    // }

    // if (pmOrAmValue === "PM" && Number(hourValue) > 4) {

    //   setImageBackroundHome(Afternoon2)
    //   return
    // }

    // if (pmOrAmValue === "PM" && Number(hourValue) > 5) {

    //   setImageBackroundHome(Night)
    //   return
    // }
  }

  useEffect(() => {

    setBackgorundHome()

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
      backgroundImg={imageBackroundHome}
      dataFooter={data?.results?.forecast}
      currently={data?.results?.currently}
      humidity={data?.results?.humidity}
      sunrise={data?.results?.sunrise}
      sunset={data?.results?.sunset}
    />
  );
}