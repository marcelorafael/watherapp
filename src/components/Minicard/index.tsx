import { Text, View } from 'react-native';
import * as S from './styles'
import Svg, { SvgUri, SvgXml } from 'react-native-svg';

// import Icon from '@react-native-vector-icons/evil-icons';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { useEffect, useState } from 'react';
// cloud-showers-heavy <-- chuva
// cloud-sun <-- sol com nuvem
// cloud-sun-rain <-- sol com chuva
// moon <-- lua
// sun <-- sol
// cloud-meatball <-- neve

export type FontAwesome6Types = 'cloud-showers-heavy' | 'cloud-sun' | 'cloud-sun-rain' | 'moon' | 'cloud-meatball'

export interface MinicardProps {
    title?: string
    icon?: FontAwesome6Types
    conditionImg?: string
    date?: string;
}

export default function Minicard({ title = 'Seg', icon = 'cloud-showers-heavy', conditionImg, date }: MinicardProps) {

    const [svgContent, setSvgContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fazendo requisição para obter o SVG
        fetch(`https://assets.hgbrasil.com/weather/icons/conditions/${!!conditionImg ? conditionImg : 'cloud'}.svg`)
            .then((response) => response.text())
            .then((data: any) => {
                // Adiciona `viewBox` se não existir
                if (!data.includes('viewBox')) {
                    data = data.replace('<svg', '<svg viewBox="-30 -40 160 160"'); // Ajuste o valor do viewBox conforme necessário
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
        <S.Wrapper>
            <Text style={{ color: 'white' }}>{title}</Text>

            {svgContent ? (
                <SvgXml xml={svgContent} width={70} height={70} /> // Ajusta o tamanho aqui
            ) : null}
            <Text style={{ color: 'white' }}>{date}</Text>
        </S.Wrapper>

    );
}