import '../data';
import '../styles.css';
import React from 'react'

const Producto1 = () => {
    return (

      <div className="col-3">
          <div className="card" style={{"width": "18rem;"}}>
          <img src={require('../img/pd1.jpg')} className="card-img" alt="my-card" />
                  <div className="card-body">
                  <h5 className="card-title">PENDRIVE</h5>
                  <p className="card-text">PENDRIVE SANDISK CRUZER BLADE CZ50 16GB</p>
                  <h3>$ 4.990 ARS</h3>
                  <button className="btn btn-primary">Comprar</button>
              </div>
          </div>
      </div>

   )
  }
  
  export default Producto1;