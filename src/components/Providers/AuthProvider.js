
import React, {useState} from 'react';

const AuthContext = React.createContext([{}, () => {}]) //the most common context is state
//we're going to provide the state to another system down the line.
//inside the parenthesis is a template for data we're going to provide:
//[ {} - object () => {} - function] - state, we're giving a context an object and a function

const AuthProvider = (props) => {

  const [auth, setAuth] = useState({id: null, name: ""});

  return (
    <AuthContext.Provider value={[auth, setAuth]}> 
      {props.children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}; //it's going to provide a context and a component.