const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Flight {
    _id: ID
    flightNumber: String
    departure: String
    arrival: String
    status: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    flights: [Flight]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFlight(flightNumber: String!, departure: String!, arrival: String!, status: String!): Flight
  }
`;

module.exports = typeDefs;
