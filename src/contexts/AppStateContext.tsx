import React, { createContext, useContext } from 'react';

interface Task {
  id: string;
  title: string;
}

interface List {
  id: string;
  title: string;
  tasks: Task[];
}

interface AppState {
  lists: List[];
}

interface AppStateContextProps {
  state: AppState;
}

const appData: AppState = {
  lists: [
    {
      id: '0',
      title: 'To Do',
      tasks: [{ id: 'c0', title: 'Buy sushi' }]
    },
    {
      id: '1',
      title: 'In Progress',
      tasks: [{ id: 'c1', title: 'Wash the car' }]
    },
    {
      id: '2',
      title: 'Done',
      tasks: [{ id: 'c2', title: 'Blow the leaves' }]
    }
  ]
};

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = () => useContext(AppStateContext);