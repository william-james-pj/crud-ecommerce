import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { IconContainer } from "../IconContainer";
import { productsType } from "../../utils/interfaces";
import { AlertUpdateProducts } from "../AlertUpdateProducts";

import * as S from "./styles";

interface TableProductsProps {
  delet: (id: number) => void;
  update: (id: number, updatedProduct: productsType) => void;
  data: productsType[];
}

export function TableProducts({ data, delet, update }: TableProductsProps) {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [itemSelect, setItemSelect] = useState<productsType>({
    id: 0,
    name: "",
    price: 0,
    qtd: 0,
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
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Qtd</TableCell>
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
                <TableCell align="center">{item.price}</TableCell>
                <TableCell align="center" size="small">
                  {item.qtd}
                </TableCell>
                <TableCell align="center" size="small">
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
      <AlertUpdateProducts
        open={openModalUpdate}
        handleClose={handleModalUpdate}
        update={update}
        item={itemSelect}
      />
    </S.Container>
  );
}
