import * as S from "./styles";

interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
