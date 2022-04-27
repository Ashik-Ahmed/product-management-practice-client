import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://morning-beyond-74670.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        console.log(name, price);

        const updatedProduct = { name, price };

        //send data to server
        const url = `https://morning-beyond-74670.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Product Updated Successfully');
                    e.target.reset();
                }
            })
    }

    return (
        <div>
            <h3>Update Product: <span style={{ 'font-size': '30px' }}>{product.name}</span> </h3>
            <form onSubmit={handleUpdateProduct}>
                <input type="text" name='name' placeholder={product.name} required />
                <br />
                <input type="text" name='price' placeholder={product.price} required />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div >
    );
};

export default UpdateProduct;