import '../data';
import '../styles.css';
import React from 'react'

const Producto3 = () => {
    return (


<div className="col-3">
<div className="card" style={{"width": "18rem;"}}>
<img src={require('../img/ssd1.jpg')} className="card-img" alt="my-card" />
        <div className="card-body">
        <h5 className="card-title">DISCO SSD</h5>
        <p className="card-text">DISCO SOLIDO EXTERNO PORTATIL SSD MAXELL USB TYPE-C 1TB</p>
        <h3>$ 94.990 ARS</h3>
        <button className="btn btn-primary">Comprar</button>
    </div>
</div>
</div>

)
}

export default Producto3;