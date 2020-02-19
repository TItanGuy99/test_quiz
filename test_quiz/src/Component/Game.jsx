import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
import Indicator from './Indicator';
import Axios from 'axios';

class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            final_questions: [],
            questions_length: 0,
            current_question: 0,
            satisfaction: 0,
            fidelity: 0,
            current_selected: ''
        }

        this.nextMethod = this.nextMethod.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        Axios.get(`json/quiz.json`)
            .then(res => {
                this.setState({ questions: res.data.banco_questoes });
                this.setState({ questions_length: res.data.questoes_randomizar })
                this.setState({ final_questions: this.shuffle(this.state.questions) });
            })
    }

    handleChange(event) {
        this.setState({
            current_selected: event.target.value
          });
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    nextMethod(event) {
        console.log(this.state.current_selected);
        this.setState({ current_question: this.state.current_question + 1 })
    }

    render() {

        let show_question = this.state.final_questions[this.state.current_question];

        if (show_question) {
            let show_alternatives = show_question.alternativas;


            if (this.state.current_question < this.state.questions_length) {
                return (
                    <div className="game-background">
                        <Indicator />

                        <div id="content-overlay" className="row">
                            <div className="col-1"></div>
                            <div id="box-white" className="col-10">
                                <div className="row text-color-black text-left">
                                    <div>
                                        <form>

                                            <p> {show_question.pergunta} </p>

                                            {show_alternatives.map((alternative) =>
                                                <div>
                                                    <p>
                                                        <input type="radio"
                                                            name="radSize"
                                                            id={alternative.id}
                                                            value={alternative.id}
                                                            onChange = {this.handleChange} />
                                                        <label htmlFor="sizeSmall">{alternative.descricao}</label>
                                                    </p>
                                                </div>
                                            )}

                                            <div id="box-purple">
                                                <p onClick={this.nextMethod} className="link"> Confirmar </p>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                );
            }
            else {
                return (
                    <div className="game-background">
                        <Indicator />

                        <div id="content-overlay" className="row">
                            <div className="col-1"></div>
                            <div id="box-white" className="col-10">
                                <div className="row text-color-black text-left">
                                    <div>
                                        <form>

                                            <p> {show_question.pergunta} </p>

                                            {show_alternatives.map((alternative) =>
                                                <div>
                                                    <p>
                                                        <input type="radio"
                                                            name="radSize"
                                                            id={alternative.id}
                                                            value={alternative.id}
                                                            onChange = {this.handleChange} />
                                                        <label htmlFor="sizeSmall">{alternative.descricao}</label>
                                                    </p>
                                                </div>
                                            )}

                                            <div id="box-purple">
                                                <p><Link className="nav-link link" to="/Result">Continuar</Link></p>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                );
            }
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default Game;