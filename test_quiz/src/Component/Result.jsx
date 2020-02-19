import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Result extends Component {
    render() {
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
                                        <h2 className="text-left custon-padding-top-5"><strong>Veja sua performance em cada indicador:</strong></h2>
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