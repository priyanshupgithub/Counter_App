import Heading from "./components/Heading";
import { ThemeSwitcherContextProvider } from "./context/ThemeSwitcherContext";

function App() {
  return (
    <>
      <ThemeSwitcherContextProvider>
        <div className="h-screen">
          <Heading />
        </div>
      </ThemeSwitcherContextProvider>
    </>
  );
}

export default App;
