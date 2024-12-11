import Home from '../../screens/Home';


const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

import Night from '../../assets/night.jpg'
import Afternoon from '../../assets/afternoon.jpg'
import Morning from '../../assets/morning.jpg'

export default function HomePresentation() {
 return (
   <Home
    title='M.R'
    backgroundImg={Night}
   />
  );
}