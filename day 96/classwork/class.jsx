
import "./button.css";

export default function Button() {
  return <button>Click</button>;
}

export default function Button({ children }) {
  return <button>{children}</button>;
}


import Button from "./ui/button";

export default function App() {
  return (
    <div>
      <Button>Click</Button>
      <Button>Submit</Button>
    </div>
  );
}
