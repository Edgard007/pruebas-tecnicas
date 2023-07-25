// ==> Types
import { LibraryAction } from "@utils/types/library-type";

// ==> Interfaces
import { LibraryRoot } from "@interfaces/library-interface";

const initialState: LibraryRoot = {
  library: [],
};

const libraryReducer = (
  state: LibraryRoot = initialState,
  action: LibraryAction
): LibraryRoot => {
  let body: LibraryRoot;

  switch (action?.type) {
    case "SET_BOOKS":
      body = {
        ...state,
        library: action?.payload?.library,
      };

      localStorage.setItem("LIBRARY", JSON.stringify(body));
      return body;

    case "READ_BOOK":
      body = {
        ...state,
        library: action?.payload?.library,
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
