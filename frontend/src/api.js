const BASE = 'https://fakestoreapi.com';

const API = {
    getProducts: async () => {
        const res = await fetch(`${BASE}/products?limit=9`);
        const json = await res.json();
        return json;
    }
}

export default API;