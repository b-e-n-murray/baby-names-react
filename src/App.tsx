import UserInput from "./components/UserInput";
import MainContent from "./components/MainContent";

function App(): JSX.Element {
  return (
    <>
      <h1>Baby Name Picker</h1>
      <hr />
      <p>Search:</p>
      <UserInput />
      <hr />
      <MainContent />
    </>
  );
}

export default App;
