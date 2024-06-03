import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_FLIGHTS, ADD_FLIGHT } from '../utils/queries';
import Auth from '../utils/auth';
const apiUrl = "http://api.aviationstack.com/v1/flights?access_key=6dbaed1e1ae149a0a38bdd92ef73030f"
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
// console.log(data)
//   fetch("https://api.aviationstack.com/v1/flights?access_key=6dbaed1e1ae149a0a38bdd92ef73030f")
//   .then(res=>res.json())
//   .then(resp=>console.log(resp))
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
        <br />
        <input
          type="text"
          placeholder="Departure"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Arrival"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <br />
        <button type="submit">Add Flight</button>
        <br />
      </form>
      <div>
        {data.flights.map((flight) => (
          <div key={flight._id} className="flights">
            <p>Flight Number: {flight.flightNumber}</p>
            <p>Flight Departure: {flight.departure}</p>
            <p>Flight Arrival: {flight.arrival}</p>
            <p>Flight Status: {flight.status}</p>
          </div>
        
        ))}
      </div>
    </div>
  );
};

export default FlightTracker;
