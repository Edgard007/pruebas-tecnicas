import { LibraryRoot } from "@interfaces/library-interface";

export type LibraryAction =
  | { type: "SET_BOOKS"; payload: LibraryRoot }
  | { type: "READ_BOOK"; payload: LibraryRoot }
  | { type: "RESTORE"; payload: LibraryRoot }
  | { type: "RESET" };
