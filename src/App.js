import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

let name="rayyan";
let navbarTitle="TextUtility"
function App() {
  return (
    // <>
    // <h1>Hello world</h1>
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Rayyan Shaikh
    //     </a>
    //     <h1> Rayyan  react first app</h1>
    //   </header>
    // </div>
    // </>
    <>
    <Navbar title={navbarTitle}></Navbar>
    <TextForms textBoxHeading="simple text utility providers"></TextForms>
    </>
    
  );
}

export default App;
