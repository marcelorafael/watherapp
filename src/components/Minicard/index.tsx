import { Text, View } from 'react-native';
import * as S from './styles'
// import Icon from '@react-native-vector-icons/evil-icons';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
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
}

export default function Minicard({ title = 'Seg',icon = 'cloud-showers-heavy' }: MinicardProps) {
    return (
        <S.Wrapper>
            <Text style={{ color: 'white' }}>{title}</Text>
            <FontAwesome6 name={icon} iconStyle="solid" color="#fff" size={25} />;
        </S.Wrapper>

    );
}