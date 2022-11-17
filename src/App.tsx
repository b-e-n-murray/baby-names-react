import MainContent from "./components/MainContent";
import "./App.css";

function App(): JSX.Element {
  return (
    <>
    <div className="App">
      <h1 className="myHeader">Baby Name Picker</h1>
      <p className="mainBody">
        <MainContent />
      </p>
      </div>
    </>
  );
}

export default App;
