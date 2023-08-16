import Producto1 from "./Producto1";
import Producto2 from "./Producto2";
import Producto3 from "./Producto3";
import Producto4 from "./Producto4";
import Producto5 from "./Producto5";
import Producto6 from "./Producto6";

import '../styles.css';

const ventas = () => {

return(
    <div className='container-fluid'>
        <div className='row d-flex justify-content-center'>
          <Producto1/>
          <Producto3/>
          <Producto4/>
         </div>

        <div className='row d-flex justify-content-center'>
          <Producto2/>
          <Producto6/>
          <Producto5/>
        </div>

      </div>
);
}

export default ventas;