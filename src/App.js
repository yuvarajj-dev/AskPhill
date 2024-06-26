import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Commerse from './Components/Commerse/Commerse';
import Expert from './Components/Expert/Expert';
import Footer from './Components/Footer/Footer';
import Askphill from './Components/Home Section/Askpill/Askphill';
import Know from './Components/Knowledge/Know';
import Menu from './Components/Menu/Menu';
import Partner from './Components/Partner/Partner';
import Shift from './Components/Shifiting/Shift';
import Shopify from './Components/Shopify/Shopify';
import Truested from './Components/Truested/Truested';


function App() {
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  const [out, setOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOut(true);
    }, 2000);
  }, []);

  const hideMenu = useCallback(() => {
    setIsMenuHidden(true);
  }, []);

  const showMenu = useCallback(() => {
    setIsMenuHidden(false);
  }, []);


  return (
    <div className="App">
      <Askphill />
      <div className={out ? "show" : "hidden"}>
        {out && (
          <>
            <Commerse />
            <Partner />
            <Expert />
            <Shopify />
            <Truested />
            <Shift />
            <Know />
            {!isMenuHidden && <Menu />}
            <Footer hideMenu={hideMenu} showMenu={showMenu} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
