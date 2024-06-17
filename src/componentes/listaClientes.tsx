import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Client from "../models/client";

type props = {
    clientes: Client[],
}

export default class ListaClientes extends Component<props>{
    constructor(props: props | Readonly<props>) {
        super(props)
        this.gerarListaClientes = this.gerarListaClientes.bind(this)
    }


    gerarListaClientes() {
        if (this.props.clientes.length <= 0) {
            return <>Não há clientes</>
        } else {
            let lista = 
            <table  className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Nome Social</th>
                <th scope="col">CPF</th>
              </tr>
            </thead>
            <tbody>
                {this.props.clientes.map((cliente,index) =>
                    <tr key={index}>
                        <td>{cliente.name}</td>
                        <td>{cliente.socialName}</td>
                        <td>{cliente.getCpf.getValue}</td>
                    </tr>
                )}
            </tbody>
          </table>
            return lista
        }
    }

    render() {
        return (
            <>
            <div className="container-fluid">
                {this.gerarListaClientes()}
            </div>
            </>
        )
    }
}