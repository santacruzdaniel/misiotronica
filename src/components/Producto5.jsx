import '../data';
import '../styles.css';
import React from 'react'

const Producto4 = () => {
    return (


<div className="col-3">
<div className="card" style={{"width": "18rem;"}}>
<img src={require('../img/wi1.jpg')} className="card-img" alt="my-card" />
        <div className="card-body">
        <h5 className="card-title">ADAPTADOR WIFI</h5>
        <p className="card-text">ADAPTADOR WIFI USB TP-LINK TL-WN725N 150Mbps</p>
        <h3>$ 9.990 ARS</h3>
        <button className="btn btn-primary">Comprar</button>
    </div>
</div>
</div>

)
}

export default Producto4;