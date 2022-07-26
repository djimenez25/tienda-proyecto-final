import "./App.scss";
import Header from "./components/Header/Header";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./components/Pages/Pages";
import { DataProvider } from "./components/Context/Dataprovider";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <Router>
          <Header />
          <Cart />

          <Pages />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
