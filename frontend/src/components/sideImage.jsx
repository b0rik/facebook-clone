import '../styles/side-image.css';

const SideImage = ({ image }) => {
  return (
    <div className="side-image">
      <img src={image} alt="profile" />
    </div>
  );
};

export default SideImage;