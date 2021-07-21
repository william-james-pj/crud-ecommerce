import { ReactNode } from "react";
import * as S from "./styles";

interface BoxProps {
  textHeader: string;
  children: ReactNode;
}

export function Box(props: BoxProps) {
  return (
    <S.Container>
      <S.Header>
        <S.TextHeader>{props.textHeader}</S.TextHeader>
      </S.Header>
      <S.Content>{props.children}</S.Content>
    </S.Container>
  );
}
