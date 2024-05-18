import './App.css';
import Commerse from './Components/Commerse/Commerse';
import Expert from './Components/Expert/Expert';
import Footer from './Components/Footer/Footer';
import Askphill from './Components/Home Section/Askpill/Askphill';
import Know from './Components/Knowledge/Know';
import Partner from './Components/Partner/Partner';
import Shift from './Components/Shifiting/Shift';
import Shopify from './Components/Shopify/Shopify';
import Truested from './Components/Truested/Truested';


function App() {
  return (
    <div className="App">
        {/* <Askphill />
        <Commerse />
        <Partner />
        <Expert />
        <Shopify />
        <Truested />
        <Shift /> */}
        <Expert />
        <Know />
        <Expert />
        <Footer />
    </div>
  );
}

export default App;
