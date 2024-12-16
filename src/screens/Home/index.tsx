import * as S from './styles'

import Minicard from '../../components/Minicard';
import fontMap from '../../typography/fonts';
import { View } from 'react-native';

type ColorTitleTypes = 'night' | 'afternoon' | 'morning';

export interface HomeProps {
  title?: string;
  colorTitle?: ColorTitleTypes;
  backgroundImg?: any;
  condition?: string;
  date?: string;
  temp?: string;
  moonImg?: string;
  conditionImg?: string;
}

const Home = ({
  title,
  colorTitle = 'night',
  backgroundImg,
  condition = '',
  date = '',
  temp = '',
  moonImg = '',
  conditionImg = '',
}: HomeProps) => {



  return (
    <S.CotainerImageBackground
      source={backgroundImg}
      resizeMode="cover"
    >
      <S.Header>
        <S.Title colorTitle={colorTitle} style={{ fontFamily: fontMap.ltr.regular }}>{title}</S.Title>
        <S.Subtitle colorTitle={colorTitle}>{condition}</S.Subtitle>
        <S.Temperature colorTitle={colorTitle}>{!!temp ? `${temp}°` : ''}</S.Temperature>
        <S.Subtitle colorTitle={colorTitle}>{date}</S.Subtitle>

        <S.ContainerCondition>
          <S.Img source={{
            uri: `https://assets.hgbrasil.com/weather/icons/conditions/${conditionImg}.svg`
          }} />

          <S.Img source={{
            uri: `https://assets.hgbrasil.com/weather/icons/moon/${moonImg}.png`
          }} />
        </S.ContainerCondition>
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