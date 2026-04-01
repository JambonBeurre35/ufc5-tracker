import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const FightForm = () => {
  const [fighter1, setFighter1] = useState('');
  const [fighter2, setFighter2] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission logic
    console.log(`Fight added: ${fighter1} vs ${fighter2} on ${date}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFighter1">
        <Form.Label>Fighter 1</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter first fighter's name" 
          value={fighter1} 
          onChange={(e) => setFighter1(e.target.value)} 
          required
        />
      </Form.Group>
      <Form.Group controlId="formFighter2">
        <Form.Label>Fighter 2</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter second fighter's name" 
          value={fighter2} 
          onChange={(e) => setFighter2(e.target.value)} 
          required
        />
      </Form.Group>
      <Form.Group controlId="formFightDate">
        <Form.Label>Date</Form.Label>
        <Form.Control 
          type="datetime-local" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Fight
      </Button>
    </Form>
  );
};

export default FightForm;