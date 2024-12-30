import logoImage from "../../assets/logo.png";

const Logo = ({ isOpen }) => {
  return (
    <img
      src={logoImage}
      alt="cart ease"
      className={`${isOpen ? "w-14" : "w-10"} mt-4 transition-all duration-300`}
    />
  );
};

export default Logo;
