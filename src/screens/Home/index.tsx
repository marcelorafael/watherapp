import * as S from './styles'

import Minicard from '../../components/Minicard';
import fontMap from '../../typography/fonts';

type ColorTitleTypes = 'night' | 'afternoon' | 'morning';

export interface HomeProps {
  title?: string;
  colorTitle?: ColorTitleTypes;
  backgroundImg?: any;

}

const Home = ({
  title,
  colorTitle = 'night',
  backgroundImg,
}: HomeProps) => {

  

  return (
    <S.CotainerImageBackground
      source={backgroundImg}
      resizeMode="cover"
    >
      <S.Header>
        <S.Title colorTitle={colorTitle} style={{fontFamily: fontMap.ltr.regular}}>{title}</S.Title>
        <S.Subtitle colorTitle={colorTitle}>Ensolarado</S.Subtitle>
        <S.Temperature colorTitle={colorTitle}>23°</S.Temperature>
      </S.Header>


      <S.ContainerDays>
        <Minicard />
        <Minicard />
        <Minicard />
        <Minicard />
        <Minicard />
        <Minicard />
        <Minicard />
      </S.ContainerDays>

    </S.CotainerImageBackground>
  );
}

export default Home