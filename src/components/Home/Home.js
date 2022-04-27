import React, { useEffect, useState } from 'react';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleProductDelete = (id) => {
        const proceed = window.confirm("Are you sure?");

        if (proceed) {

            const url = `http://localhost:5000//product/${id}`;

            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                        console.log("Deleted data")
                    }
                })

        }
    }

    return (
        <div>
            <h2>Available Products: {products.length}</h2>
            {
                products.map(product => <div key={product._id}>
                    <p> <b>{product.name}</b> - {product.price} <button onClick={() => handleProductDelete(product._id)}> Delete</button></p>
                </div>)
            }
        </div>
    );
};

export default Home;