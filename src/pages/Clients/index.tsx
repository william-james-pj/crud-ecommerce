import * as S from "./styles";

import { Title } from "../../components/Title";
import { Box } from "../../components/Box";
import { FormClient } from "../../components/FormClient";
import { TableClients } from "../../components/TableClients";
import { useClients } from "../../hooks/useClients";

export function Clients() {
  const { clients, addClients } = useClients();
  return (
    <S.Container>
      <Title text="Clients" />
      <S.RowContainer>
        <Box textHeader="Add a new client">
          <FormClient add={addClients} />
        </Box>
        <Box textHeader="Client list">
          <TableClients data={clients} />
        </Box>
      </S.RowContainer>
    </S.Container>
  );
}
