import { Box } from "../../components/Box";
import { Title } from "../../components/Title";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <Title text="Home" />
      <Box textHeader="Basic CRUD">
        <S.Text>Welcome</S.Text>
        <S.Text>Use the menu to access client and product features</S.Text>
      </Box>
    </S.Container>
  );
}
