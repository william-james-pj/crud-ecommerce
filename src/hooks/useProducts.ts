import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContexts";

export function useProducts() {
  const value = useContext(ProductsContext);

  return value;
}
