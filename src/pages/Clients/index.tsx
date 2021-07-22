import * as S from "./styles";

import { Title } from "../../components/Title";
import { Box } from "../../components/Box";
import { FormClient } from "../../components/FormClient";
import { TableClients } from "../../components/TableClients";

import { clientsType } from "../../utils/interfaces";

export function Clients() {
  return (
    <S.Container>
      <Title text="Clients" />
      <S.RowContainer>
        <Box textHeader="Add a new client">
          <FormClient />
        </Box>
        <Box textHeader="Client list">
          <TableClients data={data} />
        </Box>
      </S.RowContainer>
    </S.Container>
  );
}

const data: clientsType[] = [
  {
    id: "1",
    name: "Teste",
    cpf: "45390445830",
  },
  {
    id: "2",
    name: "Teste2",
    cpf: "45390445830",
  },
];
