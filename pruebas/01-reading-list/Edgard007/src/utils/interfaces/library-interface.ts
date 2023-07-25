export interface Library {
  book: Book[];
}

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
  read?: boolean;
}

export interface Author {
  name: string;
  otherBooks: string[];
}
