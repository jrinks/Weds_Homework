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
        fetch('http://localhost:5000/api/products')
        .then(res => res.json())
        .then(data => {
            this.setState(
                {products: data}
             )
            console.log(data)

        }
        )
        console.log("product did mount")   
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
                        {products.map((products) => (
                            <tr key={products.id}>
                                
                                <td>{products.name}</td>
                                <td>{products.description}</td>
                                <td>${products.price}</td>
                                <td><img src={products.image} width='20%' ></img></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )
        }
    }




