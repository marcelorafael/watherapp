import * as S from './styles'

import Minicard from '../../components/Minicard';
import fontMap from '../../typography/fonts';

import { SvgUri, SvgXml } from 'react-native-svg';
import { Button, View } from 'react-native';
import { useEffect, useState } from 'react';

import Icon from '@react-native-vector-icons/ant-design';
import AnimatedModal from '../../components/AnimatedModal';

type ColorTitleTypes = 'night' | 'afternoon' | 'morning';

export interface HomeProps {
  title?: string;
  colorTitle?: ColorTitleTypes;
  backgroundImg?: any;
  condition?: string;
  date?: string;
  temp?: string | number;
  moonImg?: string;
  conditionImg?: string;
  dataFooter?: any[];
  currently?: string
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
  currently = '',
}: HomeProps) => {
  const [svgContent, setSvgContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Fazendo requisição para obter o SVG
    fetch(`https://assets.hgbrasil.com/weather/icons/conditions/${!!conditionImg ? conditionImg : 'cloud'}.svg`)
      .then((response) => response.text())
      .then((data: any) => {
        // Adiciona `viewBox` se não existir
        if (!data.includes('viewBox')) {
          data = data.replace('<svg', '<svg viewBox="-30 -40 200 200"'); // Ajuste o valor do viewBox conforme necessário
        }
        setSvgContent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar SVG:', error);
        setLoading(false);
      });
  }, []);

  return (
    <S.CotainerImageBackground
      source={backgroundImg}
      resizeMode="cover"
    >
      <S.ButtonOpenModal onPress={() => setModalVisible(true)}>
        <Icon name='menu' color='white' size={30} />
      </S.ButtonOpenModal>
      <S.Header>
        <View style={{ marginLeft: 10 }}>
          <S.Title colorTitle={colorTitle} style={{ fontFamily: fontMap.ltr.regular }}>{title}, {currently}</S.Title>
          <S.Temperature colorTitle={colorTitle}>{!!temp || temp === 0 ? `${temp}°` : ''}</S.Temperature>
        </View>
        <S.Img source={{
          uri: `https://assets.hgbrasil.com/weather/icons/moon/${moonImg}.png`
        }} />


        <S.ContainerCondition>
          <S.Subtitle colorTitle={colorTitle}>{condition}</S.Subtitle>
          <S.Subtitle colorTitle={colorTitle}>{date}</S.Subtitle>
        </S.ContainerCondition>
      </S.Header>


      {svgContent ? (
        <View style={{ position: 'absolute', left: -20, bottom: 160 }}>
          <SvgXml xml={svgContent} width={600} height={600} />
        </View>
      ) : null}

      <S.ContainerDays>
        {dataFooter.slice(1, 7).map((item, index) => (
          <Minicard
            key={index}
            title={item?.weekday}
            conditionImg={item?.condition}
            date={item?.date}
            min={item?.min}
            max={item?.max}
          />
        ))}
      </S.ContainerDays>

      <AnimatedModal visible={isModalVisible} onClose={() => setModalVisible(false)}>
        <View>
          <S.Title>{title}</S.Title>
        </View>
      </AnimatedModal>

    </S.CotainerImageBackground>
  );
}

export default Home