import '../styles.css';

const Inicio = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('../img/letra-m.png')} className="App-logo" alt="logo" />
          <h1 className='tittle'>Bienvenido a Misiotrónica</h1>
          <p className='tittle'>Tu mejor sitio de compras de accesorios electrónicos</p>
      </header>
    </div>
  );
}

export default Inicio;