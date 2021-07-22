import { useContext } from "react";
import { ClientsContext } from "../contexts/ClientsContexts";

export function useClients() {
  const value = useContext(ClientsContext);

  return value;
}
