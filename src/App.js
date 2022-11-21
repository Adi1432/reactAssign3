import "./App.css";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <div className="App">
      <Introduction />
      <Experience />
      <Skills />
      <Hobbies />
    </div>
  );
}

export default App;
