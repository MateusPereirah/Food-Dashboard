import { IoMenuOutline } from "react-icons/io5";
import Button from "../button/Button";

const ToggleMenuButton = ({ toggleSideBar }) => {
  return (
    <Button onClick={toggleSideBar}>
      <IoMenuOutline className="text-2xl" />
    </Button>
  );
};

export default ToggleMenuButton;
