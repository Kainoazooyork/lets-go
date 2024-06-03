import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import FlightTracker from './components/FlightTracker';
import Login from './components/Login';
import Signup from './components/Signup';
import Auth from './utils/auth';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'
import './App.css'
const App = () => {
  return (
       <ApolloProvider client={client}>
    <Router>
      <div className="container App">
        <nav>
          {Auth.loggedIn() ? (
            <>
              <a href="/">Home</a>
              <a href="/" onClick={() => Auth.logout()}>Logout</a>
            </>
          ) : (
            <>
              <a href="/login">Login</a>
              <a href="/signup">Signup</a>
            </>
          )}
        </nav>
        <Routes>
          <Route exact path="/" element={<FlightTracker/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </div>
       </Router>
    </ApolloProvider> 
  );
};

export default App;



// client/src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
// import FlightTracker from './components/FlightTracker';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Auth from './utils/auth';
// import { ApolloProvider } from '@apollo/client';
// import client from './apolloClient'
// const App = () => {
//   return (
//     <ApolloProvider client={client}>
//     <Router>
//       <div className="container">
//         <nav>
//           {Auth.loggedIn() ? (
//             <>
//               <a href="/">Home</a>
//               <a href="/" onClick={() => Auth.logout()}>Logout</a>
//             </>
//           ) : (
//             <>
//               <a href="/login">Login</a>
//               <a href="/signup">Signup</a>
//             </>
//           )}
//         </nav>
//         <Routes>
//           <Route exact path="/" element={<FlightTracker/>} />
//           <Route exact path="/login" element={<Login/>} />
//           <Route exact path="/signup" element={<Signup/>} />
//         </Routes>
//       </div>
//     </Router>
//     </ApolloProvider>
//   );
// };

// export default App;
