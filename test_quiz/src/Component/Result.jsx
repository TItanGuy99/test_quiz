import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import qs from 'qs';

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
                <div className="result-background">
                    <div id="overlay">
                        <div id="content-overlay" className="row">
                            <div className="col-1"></div>
                            <div id="box-red-2" className="col-10">
                                <div className="row">
                                    <div className="col-6">
                                        <img className="img-indicator"  align="middle" alt="Indicator asset"/>
                                    </div>
                                    <div className="col-6">
                                        <h2 className="text-left custon-padding-top-5 text-extra-bold">Veja sua performance em cada indicador:</h2>
                                        <p className="text-left text-color-white text-extra-bold">Satisfação: {satisfaction}</p>
                                        <p className="text-left text-color-white text-extra-bold">Fidelidade: {fidelity}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;