import styled from "styled-components";

// ==> Context
import useLibraryContext from "@contexts/useLibraryContext";

// ==> Components
import ImageCard from "@components/ImageCard";

const Home = () => {
  const {
    state: { library },
  } = useLibraryContext();

  return (
    <Wrapper>
      <h1>Home</h1>
      {(library || []).map(({ book }, i) => (
        <ImageCard key={book?.ISBN} url={book.cover} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);


  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-gap: 30px;


  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export default Home;
