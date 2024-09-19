import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        productService.getProductById(id)
            .then((data) => setProduct(data))
            .catch((error) => console.error(error));
    }, [id]);

    if (!product) return <div>Cargando...</div>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
        </div>
    );
};

export default ProductDetail;
