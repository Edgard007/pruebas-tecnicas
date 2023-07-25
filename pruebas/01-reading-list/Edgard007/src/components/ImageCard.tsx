import styled from "styled-components";

interface Props {
  url: string;
}

const ImageCard = ({ url }: Props) => {
  return (
    <Wrapper>
      <img src={url} alt="img" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ImageCard;
