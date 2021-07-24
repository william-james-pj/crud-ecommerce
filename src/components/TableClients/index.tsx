import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { IconContainer } from "../IconContainer";
import { clientsType } from "../../utils/interfaces";
import { AlertUpdateClients } from "../AlertUpdateClients";

import * as S from "./styles";

interface TableProductsProps {
  delet: (id: number) => void;
  update: (id: number, updatedClient: clientsType) => void;
  data: clientsType[];
}

export function TableClients({ data, delet, update }: TableProductsProps) {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [itemSelect, setItemSelect] = useState<clientsType>({
    id: 0,
    name: "",
    cpf: "",
    cep: "",
    state: "",
    city: "",
  });

  const handleModalUpdate = () => {
    setOpenModalUpdate(!openModalUpdate);
  };

  return (
    <S.Container>
      <S.TableContainerStyled>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="left">CPF</TableCell>
              <TableCell align="left">CEP</TableCell>
              <TableCell align="left">Estado</TableCell>
              <TableCell align="left">Cidade</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center" size="small">
                  {item.id}
                </TableCell>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.cpf}</TableCell>
                <TableCell align="left" size="small">
                  {item.cep}
                </TableCell>
                <TableCell align="left" size="small">
                  {item.state}
                </TableCell>
                <TableCell align="left" size="small">
                  {item.city}
                </TableCell>
                <TableCell align="left" size="small">
                  <IconContainer
                    delet={() => delet(item.id)}
                    update={() => {
                      setItemSelect(item);
                      return handleModalUpdate();
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </S.TableContainerStyled>
      <AlertUpdateClients
        open={openModalUpdate}
        handleClose={handleModalUpdate}
        update={update}
        item={itemSelect}
      />
    </S.Container>
  );
}
