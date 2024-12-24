import { useEffect, useState } from 'react';
import * as S from './styles';

import { SvgUri, SvgXml } from 'react-native-svg';

import handleGetImageSVG from '../../function/handleGetImageSVG';

import AntDesign from '@react-native-vector-icons/ant-design';
import { Image, View } from 'react-native';

export interface CardCenterModalProps {
    conditionImg?: string;
    day?: string;
    min?: string;
    max?: string;
    date?: string;
    description?: string;
    wind?: string;
    moonPhase?: string;
}

const CardCenterModal = ({
    conditionImg = '',
    day = '',
    max = '',
    min = '',
    date = '',
    description = '',
    wind = '',
    moonPhase = 'last_quarter',
}: CardCenterModalProps) => {

    const [svgContent, setSvgContent] = useState<any>(null);
    const [svgMoon, setSvgMoon] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    function getImgaSVG() {
        handleGetImageSVG(conditionImg).then(response => setSvgContent(response))


        setLoading(false);
    }

    // function getImageMoon() {
    //         handleGetImageSVG(moonPhase).then(response => setSvgMoon(response) )

    //         console.log(svgMoon)
    //         setLoading(false);
    // }

    useEffect(() => {


        getImgaSVG()
        // getImageMoon()
        // (async () => {
        //     const data = await handleGetImageSVG(conditionImg)
        //     const dataMoon = await handleGetImageSVG(moonPhase)

        //     setSvgContent(data);
        //     setSvgMoon(dataMoon)
        //     setLoading(false);
        // })()



    }, []);
    return (
        <S.Wrapper>
            <S.MiniContainer>
                {!loading && < S.TitleModal >{day}</S.TitleModal>}
                {
                    !loading
                        ? <SvgXml xml={svgContent} width={50} height={50} />
                        : <S.TitleModal>Carregando...</S.TitleModal>
                }


                <S.TitleModal>{min}º</S.TitleModal>
                <AntDesign name='caret-down' color="#3498db" size={20} style={{marginLeft: -20}} />
                <S.TitleModal>{date}º</S.TitleModal>
                <S.TitleModal>{max}º</S.TitleModal>
                <AntDesign name='caret-up' color="#e74c3c" size={20} style={{marginLeft: -20}} />

            </S.MiniContainer>
            <S.MiniContainer>

                <Image source={{
                    uri: `https://assets.hgbrasil.com/weather/icons/moon/${moonPhase}.png`
                }} width={25} height={25} />
                <S.TitleModal>{description}</S.TitleModal>
                <S.TitleModal>Vento: {wind}</S.TitleModal>
            </S.MiniContainer>
        </S.Wrapper >
    );
}

export default CardCenterModal