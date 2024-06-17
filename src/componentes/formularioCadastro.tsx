import { Component } from "react";


export default class FormularioCadastroCliente extends Component {

    render() {
        return (
            <div className="accordion ">
                <div className="accordion-item"  id="client">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Cliente
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="container-sm">
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">@</span>
                                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="button" style={{ color:'black' }}>Cadastrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#pet" aria-expanded="false" aria-controls="pet">
                            Pet
                        </button>
                    </h2>
                    <div id="pet" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="container-sm">
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Genêro" aria-label="Genêro" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="button" style={{ color:'black' }}>Cadastrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  id="client">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#produto" aria-expanded="false" aria-controls="produto">
                            Produto
                        </button>
                    </h2>
                    <div id="produto" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="container-sm">
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="button" style={{ color:'black' }}>Cadastrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  id="client">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#servicos" aria-expanded="false" aria-controls="servicos">
                            Serviços
                        </button>
                    </h2>
                    <div id="servicos" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="container-sm">
                                <form>
                                <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="button" style={{ color:'black' }}>Cadastrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}