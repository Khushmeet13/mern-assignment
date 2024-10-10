import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AuthCard = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '20rem' }} className="p-3">
        <Card.Body>
          <Card.Title className="text-center">Welcome!</Card.Title>
          <Button 
            variant="primary" 
            className="w-100 mb-2" 
            onClick={() => navigate('/register')} 
          >
            Register
          </Button>
          <Button 
            variant="secondary" 
            className="w-100"
            onClick={() => navigate('/login')} 
          >
            Login
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AuthCard;
