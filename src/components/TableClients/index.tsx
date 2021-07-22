import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { IconContainer } from "../IconContainer";
import { clientsType } from "../../utils/interfaces";

import * as S from "./styles";

interface TableProductsProps {
  delet: (id: number) => void;
  data: clientsType[];
}

export function TableClients({ data, delet }: TableProductsProps) {
  return (
    <S.Container>
      <S.TableContainerStyled>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="left">CPF</TableCell>
              <TableCell align="center"></TableCell>
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
                <TableCell align="center" size="small">
                  <IconContainer delet={() => delet(item.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </S.TableContainerStyled>
    </S.Container>
  );
}
