import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

class Introducao extends Component{
    render(){
        return(
            <div className="introduction-background">
                <div className="row custon-padding-top-15">
                    <div className="col-1"></div>
                    <div className="col-4">
                        <h2 className="text-left text-color-purple"><strong>Game Quiz</strong></h2>
                        <p className="text-left padding-top-20 padding-bottom-20">Seja bem-vindo(a)! A partir de agora,você terá a oportunidade de colocar em prática tudo o que já aprendeu. Para isso, será necessário superar alguns desafios, tomando a <span className="text-color-red">melhor decisão para você, para o cliente e para
o negócio.</span> Está preparado?</p>
                        <div id="box-purple">
                            <h3 className="text-left text-color-white"><Link className="nav-link link" to="/Instrucao"><strong>Clique aqui para aceitar o desafio!</strong></Link></h3>
                        </div>
                    </div>
                    <div className="col-7"></div>
                </div>
            </div>
        );
    }
}

export default Introducao;