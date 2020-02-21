import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBProgress } from 'mdbreact';

class Indicator extends Component {

    // Recebe externamente as propriedados satisfaction e fidelity para gerar as barras.
    static defaultProps = {
        satisfaction: {},
        fidelity: {}
    }

    constructor(props) {
        super(props);
    }

    render() {

        const { props } = this;

        return (
            <div className="row">
                <div className="col-6">
                    <img className="img-indicator" align="right" alt="Indicator asset" width="40%" hspace="20" />
                </div>
                <div id="box-red-3" className="col-6 custom-padding-top-5 text-left">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-small text-left text-color-white">Satisfação do Cliente: </p>
                        </div>
                        <div className="col-6">
                            <MDBProgress id="indicator-satisfaction" material value={this.props.satisfaction ? this.props.satisfaction : 0} height="20px" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p className="text-small text-left text-color-white">Fidelização:</p>
                        </div>
                        <div className="col-6">
                            <MDBProgress id="indicator-fidelity" material value={this.props.fidelity ? this.props.fidelity : 0} height="20px" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Indicator;