import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

class Instrucao extends Component{
    render(){
        return(
            <div className="instruction-background">
                <div className="row custon-padding-top-15">
                    <div className="col-1"></div>
                    <div id="box-red-1" className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-left text-color-white text-regular">Ao lado, estão os três indicadores do game. Quando você tomar suas decisões, eles poderão aumentar ou diminuir. Por isso, acompanhe-os para saber sua evolução no jogo.</p>
                                <p className="text-left text-color-white text-regular">Você iniciará o game com os indicadores zerados. No decorrer do jogo, eles serão impactados por todas as suas decisões. Então, fique atento!</p>
                                <p className="text-left text-color-white text-regular">Antes de resolver cada situação, reflita como suas escolhas podem influenciar os indicadores.</p>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div><img className="img-indicator" align="right" alt="Indicator asset"/></div>
                                </div>
                                <div className="row">
                                    <div><img className="img-indicator" align="right" alt="Indicator asset"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5"></div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-2">
                        <div id="box-purple">
                            <h4 className="text-left text-color-white text-extra-bold"><Link className="nav-link link" to="/Game">Continuar</Link></h4>
                        </div>
                    </div>
                    <div className="col-8"></div>
                </div>
            </div>
        );
    }
}

export default Instrucao;