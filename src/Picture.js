import image from "./assets/images/image1.png";

function Picture() {
  return (
    <picture className="picture-container">
      <img src={image} alt="logo" className="image" />
    </picture>
  );
}

export default Picture;