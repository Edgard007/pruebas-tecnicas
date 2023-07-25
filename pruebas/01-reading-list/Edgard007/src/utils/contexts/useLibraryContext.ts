import { useContext } from "react";

//* ==> Context <== *//
import { LibraryContext } from "../providers/LibraryProvider";

const useLibraryContext = () => {
  const library = useContext(LibraryContext);
  return library;
};

export default useLibraryContext;
