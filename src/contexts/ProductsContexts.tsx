import { createContext, ReactNode } from "react";
import { usePersistedState } from "../hooks/usePersistedState";

import { productsType } from "../utils/interfaces";

type ProductsContextType = {
  products: productsType[];
  addProducts: (product: productsType) => void;
  deleteProducts: (id: number) => void;
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
    let idMissing = [...products]
      .map((item, index) => {
        if (item.id === index + 1) return products.length + 1;
        return index + 1;
      })
      .filter((a) => a !== products.length + 1);

    if (idMissing.length) product.id = idMissing[0];
    else product.id = products.length + 1;

    const arraySort = [...products, product].sort((a, b) => a.id - b.id);

    setProducts(arraySort);
  };

  const deleteProducts = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ products, addProducts, deleteProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
}
