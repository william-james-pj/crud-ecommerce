import { createContext, ReactNode } from "react";
import { usePersistedState } from "../hooks/usePersistedState";

import { productsType } from "../utils/interfaces";

type ProductsContextType = {
  products: productsType[];
  addProducts: (product: productsType) => void;
  deleteProducts: (id: string) => void;
};

type ProductsProviderProps = {
  children: ReactNode;
};

export const ProductsContext = createContext({} as ProductsContextType);

export function ProductsProvider(props: ProductsProviderProps) {
  const [products, setProducts] = usePersistedState<productsType[]>(
    "products",
    []
  );

  const addProducts = (product: productsType) => {
    product.id = `${products.length + 1}`;

    setProducts([...products, product]);
  };

  const deleteProducts = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ products, addProducts, deleteProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
}
