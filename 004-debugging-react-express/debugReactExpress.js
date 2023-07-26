// 
// Error 1. 
import React from 'react'; // didn't import useState

const Counter = (name) => { // didn't destrucutre name
  const [count, setcount] = useState(); // lowercase c. useState is not given a defualt value

  const increment = () => {
    count++; // need to do count + 1 (and need to useSetCount)
  };

  return (
      <p>Count:{count}</p>
      <button onClick={increment}>Increment</button> // jsx expressions must have one parent element.
  );
};

// in parent

<Counter name={'Sam'} />


// Error 2. 

import React from 'react';

function UserStatus ({isLoggedIn}) { // wrong on many different levels. we're using props elsewhere
  const isLoggedIn = props.isLoggedIn;

  return (
    <div class='welcome-card'> {/*className instead of class*/}
      {/* missing s on props */}
      {isLoggedIn && <p>Welcome, {prop.username} </p>} 
      {/* this is kinda weird to do, encourge for ternary */}
      {isLoggedIn || <p>Please log in</p>} // check if not logged in {/* this is not a real comment lol*/}
    </div>
  )
}

// in parent

<UserStatus true={!isLoggedIn} />


// Error 3 // remind students they can look up axios docs?

const axios = require('axios'); 

const data = {
  title: 'This is some data',
  content: 'this is some more data'
}

function createUserInfo() { // the function needs to have async infront of it. 
  await axios.post('https://api.example.com/userInfo', data)
}
