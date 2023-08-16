import { Link } from 'react-router-dom';

const NoEncontrado = () => {
  return (
<Link to={"/Inicio"}><img src={require('../img/error-404.png')} alt="logo M" /></Link>

);
}

export default NoEncontrado;