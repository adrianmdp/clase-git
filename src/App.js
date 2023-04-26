import logo from "./logo.svg";
import "./App.css";
import { Login, SignUp } from "./pages";

function App() {
  return (
    <div className="App">
      Hola <span>mundo</span>
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
