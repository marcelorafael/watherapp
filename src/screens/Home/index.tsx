import * as S from './styles'

import Minicard from '../../components/Minicard';
import fontMap from '../../typography/fonts';

import { SvgUri } from 'react-native-svg';

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
  dataFooter?: any[];
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
  dataFooter = [],
}: HomeProps) => {
  const img = "https://assets.hgbrasil.com/weather/icons/conditions/snow.svg"
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
          <SvgUri
            width="50%"
            uri={`https://assets.hgbrasil.com/weather/icons/conditions/${!!conditionImg ? conditionImg : 'cloud'}.svg`}
          />

          <S.Img source={{
            uri: `https://assets.hgbrasil.com/weather/icons/moon/${moonImg}.png`
          }} />
        </S.ContainerCondition>
      </S.Header>

      <S.ContainerDays>
        {dataFooter.slice(1, 7).map((item, index) => (
          <Minicard
            key={index}
            title={item?.weekday}
            conditionImg={item?.condition}
            date={item?.date}
          />
        ))}
      </S.ContainerDays>

    </S.CotainerImageBackground>
  );
}

export default Home