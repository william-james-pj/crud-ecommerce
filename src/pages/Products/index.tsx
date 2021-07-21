import * as S from "./styles";

import { Title } from "../../components/Title";
import { Box } from "../../components/Box";
import { FormProducts } from "../../components/FormProducts";

export function Products() {
  return (
    <S.Container>
      <Title text="Products" />
      <Box textHeader="Add a new product">
        <FormProducts />
      </Box>
    </S.Container>
  );
}
