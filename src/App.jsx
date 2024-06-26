
import { Route, Routes} from "react-router";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { routes } from "./Components/utils/routes";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";



function App() {


  const {themeDark, setThemeDark} = useContext(ContextGlobal)

  return (
    <div className={themeDark ? 'dark' : 'light'}>
    <Navbar theme={themeDark} setTheme={setThemeDark}/>
    <Routes>
    <Route path={routes.home}element={<Home/>}/>
    <Route path={routes.detail} element={<Detail/>}/>
    <Route path={routes.favs} element={<Favs/>}/>
    <Route path={routes.contact} element={<Contact/>}/>
    </Routes>
      
      <div>  
        <Footer/>
      </div>  
      </div>
      
  );
}


export default App;
