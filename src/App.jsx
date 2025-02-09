import Character from "./components/character"
import GuideBar from "./components/guideBar";
import "./App.css";

function App() {
  return (
    <>
      <div className="background">
        <GuideBar /> 
        <Character />  
      </div>
    </>
  )
}

export default App
