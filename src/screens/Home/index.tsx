import * as S from './styles'

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

import Night from '../../assets/night.jpg'

const Home = () => {
  return (
    <S.CotainerImageBackground
      source={Night}
      resizeMode="cover"
      ></S.CotainerImageBackground>
  );
}

export default Home