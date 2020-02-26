import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { MDBProgress } from 'mdbreact';
import Indicator from './Indicator';

class Instrucao extends Component {
    render() {
        return (
            <div className="set-opacity-1-animated">
                <div className="instruction-background">
                    <div className="row">
                        <div className="col-5"></div>
                        <div className="col-6 custom-padding-top-2">
                            <Indicator satisfaction="10" fidelity="10" />
                        </div>
                    </div>
                    <div className="setsize">
                        <div className="row">
                            <div className="col-1"></div>
                            <div id="box-red-1" className="col-6">
                                <div className="row box-red-outline">
                                    <div className="col-lg-5 col-sm-10">
                                        <p className="text-left text-color-white text-small">Ao lado, estão os três indicadores do game. Quando você tomar suas decisões, eles poderão aumentar ou diminuir. Por isso, acompanhe-os para saber sua evolução no jogo.</p>
                                        <p className="text-left text-color-white text-small">Você iniciará o game com os indicadores zerados. No decorrer do jogo, eles serão impactados por todas as suas decisões. Então, fique atento!</p>
                                        <p className="text-left text-color-white text-small">Antes de resolver cada situação, reflita como suas escolhas podem influenciar os indicadores.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-10">
                                        <div className="row">
                                            <div><img className="img-indicator custom-padding-bottom-5" align="left" alt="Indicator asset" width="70%" hspace="20" /></div>
                                        </div>
                                        <div id="box-red-4" className="row">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-small text-left text-color-white">Satisfação do Cliente </p>
                                                </div>
                                                <div className="col-6">
                                                    <MDBProgress id="instrucao-satisfaction" material value="20" height="20px" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-small text-left text-color-white">Fidelização&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                                </div>
                                                <div className="col-6">
                                                    <MDBProgress id="instrucao-fidelity" material value="20" height="20px" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4"></div>
                        </div>
                        <div className="row custom-btn-position custom-padding-left-7">
                            <div className="col-2 col-sm-3 col-md-3 col-lg-3 col-xl-3"></div>
                            <div className="col-4">
                                <div id="box-purple-2">
                                    <h4 className="text-color-white text-extra-bold button-font-instruction"><Link className="nav-link link" to="/Game">CONTINUAR</Link></h4>
                                </div>
                            </div>
                            <div className="col-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Instrucao;