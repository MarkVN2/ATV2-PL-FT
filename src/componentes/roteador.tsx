import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastro";
import Client from "../models/client";
import CPF from "../models/cpf";
import ListaPets from "./listaPets";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServiços";
import Pet from "../models/pet";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    
    render() {
        let clients_test = [
            new Client('Name1','SocialName1',new CPF('10', new Date())),
            new Client('Name2','SocialName2',new CPF('20', new Date())),
            new Client('Name3','SocialName3',new CPF('30', new Date())),
            new Client('Name4','SocialName4',new CPF('40', new Date())),
            new Client('Name5','SocialName5',new CPF('50', new Date())),
            new Client('Name6','SocialName6',new CPF('60', new Date())),
            new Client('Name7','SocialName7',new CPF('70', new Date())),
            new Client('Name8','SocialName8',new CPF('80', new Date())),
            new Client('Name9','SocialName9',new CPF('90', new Date())),
            new Client('Name10','SocialName10',new CPF('100', new Date()))
        ]
        let pets_test = [ 
        new Pet('Name1','Race1','M','Type1'),
        new Pet('Name2','Race2','M','Type2'),
        new Pet('Name3','Race3','M','Type3'),
        ]
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Serviços', 'Produtos', 'Adicionar']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente clientes={clients_test} />
                </>
            )
        }
        else if(this.state.tela ==='Pets') {
            return(
            <>
                {barraNavegacao}
                <ListaPets pets={pets_test} />
                
            </>
            )
        }
        else if(this.state.tela ==='Serviços') {
            return(
                <>
                    {barraNavegacao}
                    <ListaServicos servicos={[]} />
                    
                </>
                )
        }
        else if(this.state.tela ==='Produtos') {
            return(
                <>
                    {barraNavegacao}
                    <ListaProdutos produtos={[]} />
                    
                </>
                )
        }
         else if(this.state.tela ==='Adicionar') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente />
                </>
            )
        }
    }
}