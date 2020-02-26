import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

class Introducao extends Component {
    render() {
        return (
            <div className="introduction-background">
                <div className="row setsize custom-padding-top-15">
                    <div className="col-1"></div>
                    <div className="col-4">
                        <h2 className="text-left text-color-purple text-extra-bold title-font"><strong>Game Quiz</strong></h2>
                        <p className="text-left padding-top-20 padding-bottom-20 text-regular">Seja bem-vindo(a)! A partir de agora,você terá a oportunidade de colocar em prática tudo o que já aprendeu. Para isso, será necessário superar alguns desafios, tomando a <span className="text-color-red text-extra-bold">melhor decisão para você, para o cliente e para
o negócio.</span> Está preparado?</p>
                        <div id="box-purple">
                            <h3 className="text-left text-color-white text-extra-bold button-font"><Link className="nav-link link" to="/Instrucao">Clique aqui para aceitar o desafio!</Link></h3>
                        </div>
                    </div>
                    <div className="col-7"></div>
                </div>
            </div>
        );
    }
}

export default Introducao;