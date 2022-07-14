import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../store/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <div className="box">
      <h1>Greetings</h1>
      <p className="text">{randomGreeting.data.message}</p>
    </div>
  );
};

export default Greeting;
