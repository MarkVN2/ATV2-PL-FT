import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Service from "../models/service";

type props = {
    servicos: Service[],
}

export default class ListaServicos extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props)
        this.gerarListaServicos = this.gerarListaServicos.bind(this)
    }


    gerarListaServicos() {
        if (this.props.servicos.length <= 0) {
            return <>Não há serviços</>
        } else {
            let lista =
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.servicos.map((servico, index) =>
                            <tr key={index}>
                                <td>{servico.name}</td>
                                <td>{servico.getPrice}</td>
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
                    {this.gerarListaServicos()}
                </div>
            </>
        )
    }
}