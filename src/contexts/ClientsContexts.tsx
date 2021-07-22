import { createContext, ReactNode } from "react";
import { usePersistedState } from "../hooks/usePersistedState";

import { clientsType } from "../utils/interfaces";

type ClientsContextType = {
  clients: clientsType[];
  addClients: (client: clientsType) => void;
  deleteClients: (id: string) => void;
};

type ClientsProviderProps = {
  children: ReactNode;
};

export const ClientsContext = createContext({} as ClientsContextType);

export function ClientsProvider(props: ClientsProviderProps) {
  const [clients, setClients] = usePersistedState<clientsType[]>("clients", []);

  const addClients = (client: clientsType) => {
    client.id = `${clients.length + 1}`;

    setClients([...clients, client]);
  };

  const deleteClients = (id: string) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <ClientsContext.Provider value={{ clients, addClients, deleteClients }}>
      {props.children}
    </ClientsContext.Provider>
  );
}
