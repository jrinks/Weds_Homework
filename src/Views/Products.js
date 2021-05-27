import React, { Component } from 'react'

export default class Products extends Component {
    constructor() {
        console.log('products constructed');
        //super accesses the parent class
        super();

        this.state = {
            products: []
        };
        console.log(this.state.products);

    };

    
    componentDidMount(){
        fetch('localhost:5000/api/products')
        .then(res => res.json())
        .then(data => {
            this.setState(
                {products: data}
             )

        }
        )   
    }

    render(){
        const products = this.state.products;
        console.log("products component rendered");
        return (
            <div>
                
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Product Price</th>
                            <th>Product Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.image}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )
        }
    }




