import logo from './lib/logo.svg';
import './App.css';

import React, {
  useEffect,
  useState
} from 'react'


function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('')
  const foo = async () => {
    const message = await fetch('/api').then(res => res.text())
    setWelcomeMessage(message)
  }
  useEffect(() => {
    foo()
  }, [])
  return ( <
    div className = "App" >
    <
    header className = "App-header" >
    <
    img src = {
      logo
    }
    className = "App-logo"
    alt = "logo" / >
    <
    p >
    Edit < code > src / App.js < /code> and save to reload. <
    p > {
      welcomeMessage
    } < /p> < /
    p > <
    a className = "App-link"
    href = "https://reactjs.org"
    target = "_blank"
    rel = "noopener noreferrer" >
    Learn React <
    /a> < /
    header > <
    /div>
  );
}

export default App;