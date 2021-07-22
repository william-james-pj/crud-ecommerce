import { createContext, ReactNode } from "react";
import { usePersistedState } from "../hooks/usePersistedState";

import { clientsType } from "../utils/interfaces";

type ClientsContextType = {
  clients: clientsType[];
  addClients: (client: clientsType) => void;
  deleteClients: (id: number) => void;
};

type ClientsProviderProps = {
  children: ReactNode;
};

export const ClientsContext = createContext({} as ClientsContextType);

export function ClientsProvider(props: ClientsProviderProps) {
  const [clients, setClients] = usePersistedState<clientsType[]>("clients", []);

  const addClients = (client: clientsType) => {
    let idMissing = [...clients]
      .map((item, index) => {
        if (item.id === index + 1) return clients.length + 1;
        return index + 1;
      })
      .filter((a) => a !== clients.length + 1);

    if (idMissing.length) client.id = idMissing[0];
    else client.id = clients.length + 1;

    const arraySort = [...clients, client].sort((a, b) => a.id - b.id);

    setClients(arraySort);
  };

  const deleteClients = (id: number) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <ClientsContext.Provider value={{ clients, addClients, deleteClients }}>
      {props.children}
    </ClientsContext.Provider>
  );
}
