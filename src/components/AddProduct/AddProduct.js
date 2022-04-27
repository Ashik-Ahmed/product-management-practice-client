import React from 'react';

const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;

        const product = { name, price };

        //send data to the server
        fetch('https://morning-beyond-74670.herokuapp.com/add', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Product added successfully");
                    e.target.reset();
                }
            })
    }

    return (
        <div>
            <h2>Please Add a new Product</h2>
            <form onSubmit={handleAddProduct}>
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="number" name='price' placeholder='Price' required />
                <br />

                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;