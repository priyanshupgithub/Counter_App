import Heading from "./components/Heading";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="h-screen">
          <Heading />
        </div>
      </Provider>
    </>
  );
}

export default App;
