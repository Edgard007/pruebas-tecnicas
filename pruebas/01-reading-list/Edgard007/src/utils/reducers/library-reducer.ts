// ==> Types
import { LibraryAction } from "@utils/types/library-type";

// ==> Interfaces
import { Library } from "@interfaces/library-interface";

const initialState: Library = {
  book: [],
};

const libraryReducer = (
  state: Library = initialState,
  action: LibraryAction
): Library => {
  let body: Library;

  switch (action?.type) {
    case "SET_BOOKS":
      body = {
        ...state,
        book: action?.payload?.book,
      };

      localStorage.setItem("LIBRARY", JSON.stringify(body));
      return body;

    case "READ_BOOK":
      body = {
        ...state,
        book: action?.payload?.book,
      };

      localStorage.setItem("LIBRARY", JSON.stringify(body));
      return body;

    case "RESET":
      body = {
        ...initialState,
      };

      localStorage.setItem("LIBRARY", JSON.stringify(body));
      return body;

    default:
      return state;
  }
};

export { initialState };
export default libraryReducer;
