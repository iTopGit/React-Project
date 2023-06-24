import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { addAppScore } from '../../api/scoreApi';
import '../style/Menu.css';

const Menu = ({ onClick, points }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name;
  const [requestBody, setRequestBody] = useState({
    name: name,
    score: points,
    projectName: 'Tetris Game',
  });

  useEffect(() => {
    addScoreAndSubmit(); // Automatically submit the score
  }, [points]);

  const gotoBoard = () => {
    navigate('/');
  };

  const addScoreAndSubmit = () => {
    addAppScore(requestBody)
      .then((response) => {
        // Handle success response
        onSubmitSuccess();
      })
      .catch((error) => {
        // Handle error
        console.error('Failed to add score:', error);
      });
  };

  const onSubmitSuccess = () => {
    // Handle successful submission
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
