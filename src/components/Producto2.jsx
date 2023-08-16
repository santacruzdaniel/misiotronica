import '../data';
import '../styles.css';
import React from 'react'

const Producto2 = () => {
    return (


<div className="col-3">
<div className="card" style={{"width": "18rem;"}}>
<img src={require('../img/pb1.jpg')} className="card-img" alt="my-card" />
        <div className="card-body">
        <h5 className="card-title">POWER BANK</h5>
        <p className="card-text">POWER BANK Y CARGADOR INALAMBRICO Qi SOUL 10.000 mAh</p>
        <h3>$ 26.400 ARS</h3>
        <button className="btn btn-primary">Comprar</button>
    </div>
</div>
</div>

)
}

export default Producto2;