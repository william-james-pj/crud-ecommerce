import * as S from "./styles";

import { Title } from "../../components/Title";
import { Box } from "../../components/Box";
import { FormProducts } from "../../components/FormProducts";
import { TableProducts } from "../../components/TableProducts";

import { productsType } from "../../utils/interfaces";

export function Products() {
  return (
    <S.Container>
      <Title text="Products" />
      <S.RowContainer>
        <Box textHeader="Add a new product">
          <FormProducts />
        </Box>
        <Box textHeader="Product list">
          <TableProducts data={data} />
        </Box>
      </S.RowContainer>
    </S.Container>
  );
}

const data: productsType[] = [
  {
    id: "1",
    name: "Teste",
    price: 25.99,
    qtd: 5,
  },
  {
    id: "2",
    name: "Teste2",
    price: 35.99,
    qtd: 1,
  },
];
