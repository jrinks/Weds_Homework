import React, { Component } from 'react'

export default class Contact extends Component {
    constructor() {
        console.log('contacts constructed');
        //super accesses the parent class
        super();

        this.state = {
            name: "Kekambas",
            kekambas: []
        };
        console.log(this.state.kekambas);

    };

    render(){
        const kekambas = this.props.kekambas;
        console.log("kekambas component rendered");
        return (
            <div>
                <h3>{this.props.name}</h3>
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First_Name</th>
                            <th>Last_Name</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kekambas.map((kekamba) => (
                            <tr key={kekamba.id}>
                                <td>{kekamba.id}</td>
                                <td>{kekamba.first_name}</td>
                                <td>{kekamba.last_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )
        }
    }