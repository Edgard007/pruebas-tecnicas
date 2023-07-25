import { Library } from "@interfaces/library-interface";

export type LibraryAction =
  | { type: "SET_BOOKS"; payload: Library }
  | { type: "READ_BOOK"; payload: Library }
  | { type: "RESTORE"; payload: Library }
  | { type: "RESET" };
