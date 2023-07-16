import styled from "styled-components";

// ==> Components
import Navbar from "./components/Navbar";

interface LoggerProps {
  children?: JSX.Element | JSX.Element[];
}

const Logger = ({ children }: LoggerProps) => {
  return (
    <Wrapper>
      <Navbar />
      <main>{children}</main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --hNav: 4rem;
  --z-md: 5;

  width: 100%;
  height: 100vh;
  position: relative;

  main {
    position: absolute;
    width: 100%;
    height: calc(100% - var(--hNav));
    right: 0;
    bottom: 0;
  }
`;

export default Logger;
