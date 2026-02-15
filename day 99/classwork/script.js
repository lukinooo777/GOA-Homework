import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="შეიყვანე სახელი"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" disabled={name.trim() === ''}>
        გაგზავნა
      </button>
    </form>
  );
}

export default App;
