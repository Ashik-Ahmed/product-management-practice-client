import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://morning-beyond-74670.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleProductDelete = (id) => {
        const proceed = window.confirm("Are you sure?");

        if (proceed) {

            const url = `https://morning-beyond-74670.herokuapp.com/product/${id}`;

            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })

        }
    }

    return (
        <div>
            <h2>Available Products: {products.length}</h2>
            {
                products.map(product => <div key={product._id}>
                    <p> <b>{product.name}</b> - {product.price} <Link to={`/update/${product._id}`}> <button>Update</button> </Link> <button onClick={() => handleProductDelete(product._id)}> Delete</button></p>
                </div>)
            }
        </div>
    );
};

export default Home;