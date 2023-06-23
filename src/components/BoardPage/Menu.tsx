import "./Menu.css";
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router

const Menu = ({ onClick }) => {

  const navigate = useNavigate();

  const gotoBoard = () => {
    navigate('/'); // Replace 'name' with the actual value you want to pass
  };

  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        Play again
      </button>
      <button className="Button" onClick={gotoBoard}>
        Exit
      </button>
    </div>
  );
};

export default Menu;
