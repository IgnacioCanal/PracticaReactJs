import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1>Bienvenidos a Ferretería Victornillo</h1>
      <p>Encuentra las mejores ofertas para tu hogar.</p>
      <Link to="/productos">Ver Productos</Link>
    </div>
  );
};

export default Home;