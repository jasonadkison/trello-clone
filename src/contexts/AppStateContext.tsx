import React, { createContext, useContext, useReducer } from 'react';
import { nanoid } from 'nanoid';

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
  dispatch: React.Dispatch<AppAction>;
}

type AppAction =
  | {
      type: 'CREATE_LIST';
      payload: string;
    }
  | {
      type: 'CREATE_TASK';
      payload: { title: string; listId: string; };
    }

const appStateReducer = (state: AppState, action: AppAction): AppState => {
  console.log(action);
  switch (action.type) {
    case 'CREATE_LIST': {
      const newList: List = {
        id: nanoid(),
        title: action.payload,
        tasks: []
      };

      return {
        ...state,
        lists: [
          ...state.lists,
          newList
        ]
      };
    }
    case 'CREATE_TASK': {
      const listIndex = state.lists.findIndex(list => list.id === action.payload.listId);
      if (listIndex < 0) return state;

      const newTask: Task = {
        id: nanoid(),
        title: action.payload.title
      };

      state.lists[listIndex].tasks.push(newTask);

      return { ...state };
    }
    default: {
      return state;
    }
  }
};

const initialState: AppState = {
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
  const [state, dispatch] = useReducer(appStateReducer, initialState);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = () => useContext(AppStateContext);