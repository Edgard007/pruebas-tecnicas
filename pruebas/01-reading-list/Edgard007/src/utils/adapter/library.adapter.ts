import { useState, useEffect } from "react";

// ==> Interfaces
import { Library } from "@interfaces/library-interface";

// ==> Paths
import { BOOK_API } from "@config/paths";

export const libraryAdapter = () => {
  const [library, setLibrary] = useState<Library>({ book: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BOOK_API);
        const data: Library = await response.json();
        setLibrary(data);
      } catch (err) {
        console.error("Error fetching JSON data:", err);
      }
    };

    fetchData();
  }, []);

  return library;
};
