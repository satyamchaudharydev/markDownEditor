import { EditorProvider } from "./context/Editor";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
function App() {
  return (
    <EditorProvider>
      <div className="App">
        <Sidebar></Sidebar>
        <MainContainer></MainContainer>
      </div>
    </EditorProvider>
  );
}

export default App;
