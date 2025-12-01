import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import {Routes,Route} from 'react-router-dom';
export default function App(){


return(

<div>

<h3 style={{color:"green",fontSize:"20px"}}> Componente de Función desde dependencias Locales </h3>
<Nav />
<Routes> <Route path="/about" element={<About/>} /> </Routes>

</div>

)

}
