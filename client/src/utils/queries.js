// client/src/utils/queries.js
import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_FLIGHTS = gql`
  query getFlights {
    flights {
      _id
      flightNumber
      departure
      arrival
      status
    }
  }
`;

export const ADD_FLIGHT = gql`
  mutation addFlight($flightNumber: String!, $departure: String!, $arrival: String!, $status: String!) {
    addFlight(flightNumber: $flightNumber, departure: $departure, arrival: $arrival, status: $status) {
      _id
      flightNumber
      departure
      arrival
      status
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
          username
          email
          password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        password
      }
    }
  }
`;
