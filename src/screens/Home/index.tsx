import * as S from './styles'

import Minicard from '../../components/Minicard';
import fontMap from '../../typography/fonts';

import { SvgUri, SvgXml } from 'react-native-svg';
import { Button, View } from 'react-native';
import { useEffect, useState } from 'react';

import Icon from '@react-native-vector-icons/ant-design';
import AnimatedModal from '../../components/AnimatedModal';

import Goticula from '../../assets/goticula.png';
import Sunrise from '../../assets/sunrise.png';
import Sunset from '../../assets/sunset.png';
import moment from 'moment';
import axios from 'axios';

import { useFormatTime } from '../../hooks/useFormatTime';
import { useFetchSvg } from '../../hooks/useGetImageWeather';
import CardCenterModal from '../../components/CardCenterModal';

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
  humidity?: string | number;
  sunrise?: string;
  sunset?: string;
  wind_speedy?: string;
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
  humidity = '',
  sunset = '',
  sunrise = '',
  wind_speedy = '',
}: HomeProps) => {
  const formatTime = useFormatTime();
  const { fetchSvg, svgData } = useFetchSvg();

  const [svgContent, setSvgContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataModal, setDataModal] = useState<any>([]);
  const [isModalVisible, setModalVisible] = useState(false);


  useEffect(() => {

    let svgImages: any = [];
    dataFooter.map((item, index) => {
      fetchSvg(item?.condition)
      svgImages.push(svgData)
    });

    // setImageSVG(svgImages)

    const updatedArr1 = dataFooter.map((item, index) => ({
      ...item,
      condition: svgImages[index] || item.condition, // Atualiza o condition apenas se houver valor correspondente em arr2
    }));

    setDataModal(updatedArr1)

    // Fazendo requisição para obter o SVG
    fetch(`https://assets.hgbrasil.com/weather/icons/conditions/${!!conditionImg ? conditionImg : 'cloud'}.svg`)
      .then((response) => response.text())
      .then((data: any) => {
        // Adiciona `viewBox` se não existir
        if (!data.includes('viewBox')) {
          data = data.replace('<svg', '<svg viewBox="-40 -30 200 200"'); // Ajuste o valor do viewBox conforme necessário
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
        <S.Title colorTitle={colorTitle} style={{ fontFamily: fontMap.ltr.regular }}>{title}, {currently}</S.Title>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <S.Temperature colorTitle={colorTitle}>{!!temp || temp === 0 ? `${temp}°` : ''}</S.Temperature>
          <S.Img source={{
            uri: `https://assets.hgbrasil.com/weather/icons/moon/${moonImg}.png`
          }} />
        </View>

        <S.ContainerCondition>
          <S.Subtitle colorTitle={colorTitle}>{condition}</S.Subtitle>

          <S.Subtitle colorTitle={colorTitle}>{date}</S.Subtitle>
        </S.ContainerCondition>
      </S.Header>



      {svgContent ? (
        <View style={{ position: 'absolute', left: -20, bottom: 160 }}>
          <SvgXml xml={svgContent} width={400} height={400} />
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
        <S.WrapperModal>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{temp}º | {condition}</S.Subtitle>

          <S.ContainerTopModal>
            <S.MiniContainerModal>
              <S.TitleModal>Nascer do Sol</S.TitleModal>
              <S.OtherImg source={Sunrise} />
              <S.TitleModal>{formatTime(sunrise)}</S.TitleModal>
            </S.MiniContainerModal>

            <S.MiniContainerModal>
              <S.TitleModal>Por do Sol</S.TitleModal>
              <S.OtherImg source={Sunset} />
              <S.TitleModal>{formatTime(sunset)}</S.TitleModal>
            </S.MiniContainerModal>
          </S.ContainerTopModal>


          <S.TitleModal>PREVISÃO DO TEMPO PARA 10 DIAS</S.TitleModal>

          <S.CenterViewModal>
            {dataFooter.map((item: any, index: any) => (
              <CardCenterModal
                conditionImg={item?.condition}
                key={index}
                day={item?.weekday}
                date={item?.date}
                min={item?.min}
                max={item?.max}
                description={item?.description}
                wind={item?.wind_speedy}
                moonPhase={item?.moon_phase}
              />
            ))}

          </S.CenterViewModal>

          {/* <View style={{ width: '90%', height: 70 }} /> */}
        </S.WrapperModal>
      </AnimatedModal>

    </S.CotainerImageBackground>
  );
}

export default Home