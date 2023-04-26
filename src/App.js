import logo from "./logo.svg";
import "./App.css";
import { SignUp } from "./components/signup";
import { Login } from "./pages";

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
