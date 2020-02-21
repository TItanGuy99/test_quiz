import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import qs from 'qs';
import { MDBProgress } from 'mdbreact';

class Result extends Component {

    constructor(props) {
        super(props);

        // Recebe os valores da URL para gerar as barras.
        this.state = {
            indicators: qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).indicators,
        };
    };

    render() {

        let satisfaction = this.state.indicators.substring(0, this.state.indicators.indexOf('?'));
        let fidelity = this.state.indicators.substring(this.state.indicators.indexOf('?')+1, this.state.indicators.length);

        return (
            <div>
                <div className="result-background setsize">
                    <div id="overlay">
                        <div className="row custom-padding-top-15">
                            <div className="col-3"></div>
                                <div className="custom-padding-left-5">
                                    <div id="box-red-2" className="col-6">
                                        <div className="row">
                                            <div className="col-6">                                        
                                                <img className="img-indicator custom-padding-bottom-5" align="left" alt="Indicator asset" width="40%" hspace="20"/>
                                            </div>
                                            <div className="col-6 custom-padding-right-5">
                                                <h2 className="text-left text-color-white text-extra-bold sub-title-font">Veja sua performance em cada indicador:</h2>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="text-regular text-color-white text-left">Satisfação do Cliente: </p>
                                            </div>
                                            <div className="col-6">
                                                <MDBProgress material value={satisfaction ? satisfaction : 0} height="20px"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="text-regular text-color-white text-left">Fidelização:</p>
                                            </div>
                                            <div className="col-6">
                                                <MDBProgress id="result-fidelity" material value={fidelity ? fidelity : 0} height="20px" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="col-3"></div>
                        </div>


                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;