import '../data';
import '../styles.css';
import React from 'react'

const Producto4 = () => {
    return (


<div className="col-3">
<div className="card" style={{"width": "18rem;"}}>
<img src={require('../img/gc1.jpg')} className="card-img" alt="my-card" />
        <div className="card-body">
        <h5 className="card-title">GOOGLE CHROMECAST</h5>
        <p className="card-text">GOOGLE CHROMECAST 4K 3RA GEN ADAPTADOR HDMI LCD A SMART TV NETFLIX</p>
        <h3>$ 39.990 ARS</h3>
        <button className="btn btn-primary">Comprar</button>
    </div>
</div>
</div>

)
}

export default Producto4;