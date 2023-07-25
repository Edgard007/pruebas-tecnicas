const ImageCard = ({ image }: { image: Image }) => {
  return (
    <div>
      <img src={image.webformatURL} alt="" />
    </div>
  );
};

export default ImageCard;
