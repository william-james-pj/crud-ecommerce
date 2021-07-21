import { Routes } from "../routes";

import { Nav } from "../components/Nav";

import * as S from "./styles";

export function Layout() {
  return (
    <S.Container>
      <Nav />
      <S.Content>
        <Routes />
      </S.Content>
    </S.Container>
  );
}
