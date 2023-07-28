// 
// Error 1. 
import React, {useState} from 'react'; 

export default const Counter = ({name}) => { 
  const [count, setCount] = useState(0); 

  const increment = () => {
    setCount(count + 1)
  };

  return (
    <div>
      <p>Welcome {name}</p>
      <p>Count:{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// in parent

<Counter name={'Sam'} />


// Error 2. 

import React from 'react';

export function UserStatus ({isLoggedIn , username}) { 

  return (
    <div className='welcome-card'> 
      {isLoggedIn ? <p>Welcome, {username} </p> : <p>Please log in</p>} 
    </div>
  )
}

// in parent

<UserStatus isLoggedIn={true} username={'something'} />


// Error 3. This is a mean one sorry. You shouldn't need to google anything, but there are some new things here. Ignore them :P

import React, {useState} from 'react'
const axios = require('axios'); 
const [email, setemail] = useState(' ')
const [password, setpassword] = useState(second)

// some other event handlers and things for a sign up form 

async function createUserInfo() { 
  await axios.post('https://api.example.com/userInfo', JSON.stringify({
    email,
    password,
  }), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res)) => {
    console.log(res.status)
    alert('Sign up successful!')
  }
}
