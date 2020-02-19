import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
import Indicator from './Indicator';

class Game extends Component{
    render(){
        return(
            <div className="game-background">
                <Indicator />
                <div className="row custon-padding-top-5">
                    <div className="col-1"></div>
                    <div className="col-4">
                        <h2 className="text-left">Game Quiz</h2>
                        <p className="text-left">Seja bem-vindo(a)! A partir de agora,você terá a oportunidade de colocar em prática tudo o que já aprendeu. Para isso, será necessário superar alguns desafios, tomando a melhor decisão para você, para o cliente e para
o negócio. Está preparado?</p>
                        <h3 className="text-left"><Link className="nav-link" to="/Result">Clique aqui para aceitar o desafio!</Link></h3>
                    </div>
                    <div className="col-7"></div>
                </div>
            </div>
        );
    }
}

export default Game;