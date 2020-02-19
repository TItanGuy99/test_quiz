import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Indicator extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-6">
                                <img className="img-indicator" alt="Indicator asset"/>
                            </div>
                            <div className="col-6 custon-padding-top-5 text-left">
                                <p>Satisfação do Cliente</p>
                                <p>Fidelização</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Indicator;