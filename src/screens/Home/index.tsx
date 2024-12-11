import * as S from './styles'

import Minicard from '../../components/Minicard';

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
      <S.Title colorTitle={colorTitle}>{title}</S.Title>
      <S.Subtitle colorTitle={colorTitle}>Ensolarado</S.Subtitle>
      <S.Temperature colorTitle={colorTitle}>26°</S.Temperature>

      <Minicard />
    </S.CotainerImageBackground>
  );
}

export default Home