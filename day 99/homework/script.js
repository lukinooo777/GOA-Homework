function App() {
  const greeting = "Welcome to React!";

  return (
    <div>
      <h2>{greeting}</h2>
    </div>
  );
}

export default App;


import reactLogo from './assets/react-logo.png';

function App() {
  return (
    <div>
      <h2>My React Image</h2>
      <img 
        src={reactLogo} 
        alt="React Logo" 
        style={{ width: '300px', height: '200px' }} 
      />
    </div>
  );
}

export default App;
