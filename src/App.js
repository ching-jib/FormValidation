import "./App.css";
import Form from "./Components/Form";
import loginimg from "./Images/sea.jpeg";

function App() {
  return (
    <div className="container">
      <img src={loginimg} className="login-img" alt="loginimg" />
      <Form />
    </div>
  );
}

export default App;
