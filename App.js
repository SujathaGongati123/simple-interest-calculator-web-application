// App.js

import React, { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [simpleInterest, setSimpleInterest] = useState(null);

  const onSubmit = data => {
    const { principal, rate, time } = data;
    const interest = (principal * rate * time) / 100;
    setSimpleInterest(interest);
  };

  return (
    <div className="App">
      <h1>Simple Interest Calculator</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="number" placeholder="Principal amount" {...register("principal", { required: true })} />
        {errors.principal && <span className="error">Principal amount is required</span>}
        <input type="number" placeholder="Interest rate" {...register("rate", { required: true })} />
        {errors.rate && <span className="error">Interest rate is required</span>}
        <input type="number" placeholder="Time period" {...register("time", { required: true })} />
        {errors.time && <span className="error">Time period is required</span>}
        <button type="submit">Calculate</button>
      </form>
      {simpleInterest && <p>Simple Interest: {simpleInterest}</p>}
    </div>
  );
}

export default App;
