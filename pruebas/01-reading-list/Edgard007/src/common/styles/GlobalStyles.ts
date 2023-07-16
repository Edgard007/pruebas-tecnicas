import { createGlobalStyle } from "styled-components";

import Variables from "./Variables";
import Animations from "./Animations";

export const GlobalStyles = createGlobalStyle`
  ${Variables};
  ${Animations};

  * {
      margin: 0px;
      padding: 0px;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--color-primary);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-secundary);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-secundary-gray);
  }
`;
