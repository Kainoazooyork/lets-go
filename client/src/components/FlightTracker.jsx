// client/src/components/FlightTracker.js
import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_FLIGHTS, ADD_FLIGHT } from '../utils/queries';
import Auth from '../utils/auth';

function FlightTracker ()  {
  const { loading, data } = useQuery(QUERY_FLIGHTS);
  const [addFlight] = useMutation(ADD_FLIGHT);

  const [flightNumber, setFlightNumber] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [status, setStatus] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await addFlight({
        variables: { flightNumber, departure, arrival, status },
      });

      setFlightNumber('');
      setDeparture('');
      setArrival('');
      setStatus('');
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Flight Tracker</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Flight Number"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Departure"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
        <input
          type="text"
          placeholder="Arrival"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button type="submit">Add Flight</button>
      </form>
      <div>
        {data.flights.map((flight) => (
          <div key={flight._id}>
            <li>{flight.flightNumber}</li>
            <li>{flight.departure}</li>
            <li>{flight.arrival}</li>
            <li>{flight.status}</li>
          </div>
        
        ))}
      </div>
    </div>
  );
};

export default FlightTracker;
