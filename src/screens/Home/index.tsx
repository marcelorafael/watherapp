import * as S from './styles'

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
      </S.CotainerImageBackground>
  );
}

export default Home