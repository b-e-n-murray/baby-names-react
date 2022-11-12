import MainContent from "./components/MainContent";
import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <h1 className="myHeader">Baby Name Picker</h1>
      <hr />
      <p className ="nameList"><MainContent /></p>
    </>
  );
}

export default App;
