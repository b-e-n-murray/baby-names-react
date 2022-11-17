import MainContent from "./components/MainContent";
import "./App.css";

function App(): JSX.Element {
  return (
    <div>
      <h1 className="myHeader">Baby Name Picker</h1>
      <hr />
          <p className="mainBody"><MainContent/></p>
      </div>
  );
}

export default App;
