import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBProgress } from 'mdbreact';

class Indicator extends Component{

    // Recebe externamente as propriedados satisfaction e fidelity para gerar as barras.
    static defaultProps = {
        satisfaction: {},
        fidelity: {}
    }

    constructor(props){
        super(props);
    }

    render(){

        const { props } = this;

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
                                <p className="text-regular">Satisfação do Cliente: 
                                    <MDBProgress material value={this.props.satisfaction ? this.props.satisfaction : 0} height="20px">
                                        {this.props.satisfaction ? this.props.satisfaction : 0}
                                    </MDBProgress>
                                </p>
                                <p className="text-regular">Fidelização: 
                                    <MDBProgress material value={this.props.fidelity ? this.props.fidelity : 0} height="20px">
                                        {this.props.fidelity ? this.props.fidelity : 0}
                                    </MDBProgress>                               
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Indicator;