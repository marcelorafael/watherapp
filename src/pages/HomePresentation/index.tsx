import Home from '../../screens/Home';


const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

import Night from '../../assets/night.jpg'
import Afternoon from '../../assets/afternoon.jpg'
import Afternoon2 from '../../assets/afternoon-1.jpg'
import Morning from '../../assets/morning.jpg'
import { useEffect, useState } from 'react';

import GetDatas from '../../services/ConnectApi'

export default function HomePresentation() {
  const[data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
        GetDatas.then(res => setData(res) );
    };

    loadData();
},[data]);

console.log(JSON.stringify(data));

 return (
   <Home
    title='Belém-PA'
    backgroundImg={Night}
   />
  );
}