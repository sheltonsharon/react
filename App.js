import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} width="100px" />
      <h1>My awesome website in React</h1>
      <h3>Reasons I love React</h3>
      <ol>
        <li>It's composable</li>
        <li>It's declarative</li>
        <li>It's a hireable skill</li>
        <li>It's actively maintained by skilled people</li>
      </ol>
    </div>
  );
}

export default App;
