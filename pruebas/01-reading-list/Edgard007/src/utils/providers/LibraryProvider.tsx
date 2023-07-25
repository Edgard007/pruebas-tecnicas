import { createContext, useReducer, useEffect, useMemo } from "react";

// ==> Types
import { LibraryAction } from "@utils/types/library-type";

// ==> Interfaces
import { LibraryRoot } from "@interfaces/library-interface";

// ==> Reducers
import libraryReducer, {
  initialState as initStateReducer,
} from "@reducers/library-reducer";

// ==> Data adapter
import { libraryAdapter } from "@utils/adapter/library.adapter";

interface LibraryProviderProps {
  children: JSX.Element | JSX.Element[];
}

export type LibraryContextType = {
  state: LibraryRoot;
  dispatch: React.Dispatch<LibraryAction>;
};

export const LibraryContext = createContext<LibraryContextType>(
  {} as LibraryContextType
);

export const LibraryProvider = ({ children }: LibraryProviderProps) => {
  const librarys = libraryAdapter();

  // ==> STATE
  const [state, dispatch] = useReducer(libraryReducer, initStateReducer);

  useEffect(() => {
    restoreState();
  }, []);

  window.addEventListener("storage", (ev) => {
    if (ev.key === "LIBRARY") {
      restoreState();
    }
  });

  const restoreState = () => {
    // ==> Restore info
    const library = localStorage.getItem("LIBRARY");

    if (library) {
      // ==> Restore sesion
      const body: LibraryRoot = JSON.parse(library);
      dispatch({
        type: "RESTORE",
        payload: body,
      });
    }
  };

  const insertBooks = (data: LibraryRoot) => {
    dispatch({
      type: "SET_BOOKS",
      payload: {
        library: data?.library ?? [],
      },
    });
  };

  useMemo(() => {
    const { library } = librarys;
    if ((library || []).length) insertBooks(librarys);
  }, [librarys]);

  return (
    <LibraryContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};
