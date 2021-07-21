import * as S from "./styles";

import { Title } from "../../components/Title";
import { Box } from "../../components/Box";
import { FormClient } from "../../components/FormClient";

export function Clients() {
  return (
    <S.Container>
      <Title text="Clients" />
      <Box textHeader="Add a new client">
        <FormClient />
      </Box>
    </S.Container>
  );
}
