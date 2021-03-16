import Home from '../Home';
import { useParams } from 'react-router-dom';

const Products = () => {
    const params = useParams();
    const { page } = params;

    return (
        <Home page={ +page || 1 } />
    )
}

export default Products;
