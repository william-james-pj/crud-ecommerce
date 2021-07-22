import * as S from "./styles";

import { Title } from "../../components/Title";
import { Box } from "../../components/Box";
import { FormProducts } from "../../components/FormProducts";
import { TableProducts } from "../../components/TableProducts";
import { useProducts } from "../../hooks/useProducts";

export function Products() {
  const { products, addProducts, deleteProducts } = useProducts();

  return (
    <S.Container>
      <Title text="Products" />
      <S.RowContainer>
        <Box textHeader="Add a new product">
          <FormProducts add={addProducts} />
        </Box>
        <Box textHeader="Product list">
          <TableProducts data={products} delet={deleteProducts} />
        </Box>
      </S.RowContainer>
    </S.Container>
  );
}
