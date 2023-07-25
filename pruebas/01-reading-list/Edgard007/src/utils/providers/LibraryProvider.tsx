import { createContext, useReducer, useEffect, useMemo } from "react";

// ==> Types
import { LibraryAction } from "@utils/types/library-type";

// ==> Interfaces
import { Library, Book } from "@interfaces/library-interface";

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
  state: Library;
  dispatch: React.Dispatch<LibraryAction>;
};

export const LibraryContext = createContext<LibraryContextType>(
  {} as LibraryContextType
);

export const LibraryProvider = ({ children }: LibraryProviderProps) => {
  const librarys = libraryAdapter();

  console.log(librarys);

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
      const body: Library = JSON.parse(library);
      dispatch({
        type: "RESTORE",
        payload: body,
      });
    }
  };

  const insertBooks = (books: Book[]) => {
    dispatch({
      type: "SET_BOOKS",
      payload: {
        book: books,
      },
    });
  };

  useMemo(() => {
    const { book } = librarys;
    if ((book || []).length) insertBooks(book);
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
