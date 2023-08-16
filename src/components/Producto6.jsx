import '../data';
import '../styles.css';
import React from 'react'

const Producto4 = () => {
    return (


<div className="col-3">
<div className="card" style={{"width": "18rem;"}}>
<img src={require('../img/cam1.jpg')} className="card-img" alt="my-card" />
        <div className="card-body">
        <h5 className="card-title">CAMARA IP</h5>
        <p className="card-text">CAMARA IP TP-LINK TAPO C310 DAY NIGHT Wi-FI EXTERIOR</p>
        <h3>$ 59.990 ARS</h3>
        <button className="btn btn-primary">Comprar</button>
    </div>
</div>
</div>

)
}

export default Producto4;