import styled from "styled-components";

interface LoggerProps {
    children?: JSX.Element | JSX.Element[];
}

const Logger = ({children}: LoggerProps) => {

    return (
        <Wrapper>
            {children}
        </Wrapper>    
    )

};

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: var(--hNav);
    top: 0;
    left: 0;

    z-index: var(--z-md);

    background-color: var(--color-primary);
    box-shadow: 0 0px 2px var(--color-secundary);
`;

export default Logger;