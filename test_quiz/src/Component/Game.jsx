import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
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
            current_selected: '',
            disabled: true,
            form_animation: false,
        }

        this.nextMethod = this.nextMethod.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Quando o componente estiver pronto, carrega o Json
    componentDidMount() {
        Axios.get(`json/quiz.json`)
            .then(res => {
                this.setState({ questions: res.data.banco_questoes });
                this.setState({ questions_length: res.data.questoes_randomizar })
                this.setState({ final_questions: this.shuffle(this.state.questions) });

                this.state.final_questions.forEach(element => {
                    console.log(element);
                })
            })
    }

    // Metodo disparado quando algum radio button é selecionado
    handleChange(event) {
        if (this.state.form_animation) {
            this.setState({ form_animation: false });
        }
        this.setState({ current_selected: event.target.value });
        this.setState({ disabled: false });
    }

    // Embaralha o array
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

    // Metodo chamado quando o botão responder é clicado
    nextMethod(event) {
        this.setState({ form_animation: true });

        let get_satisfaction;
        let get_fidelity;

        this.state.final_questions[this.state.current_question].alternativas.forEach(element => {
            if (element.id === this.state.current_selected) {
                get_satisfaction = element.impacto_indicadores.satisfacao;
                get_fidelity = element.impacto_indicadores.fidelizacao;
            }
        });

        this.setState({ satisfaction: this.state.satisfaction + get_satisfaction })
        this.setState({ fidelity: this.state.fidelity + get_fidelity })

        this.setState({ current_question: this.state.current_question + 1 })
        this.setState({ current_selected: '' });
        this.setState({ disabled: true });

        if (this.state.current_question === this.state.questions_length - 1) {
            this.props.history.push('/Result?indicators=' +
                this.state.satisfaction + '?' +
                this.state.fidelity);
        }
    }

    render() {

        let show_question = this.state.final_questions[this.state.current_question];

        if (show_question) {
            let show_alternatives = show_question.alternativas;
            return (
                <div className="set-opacity-1-animated">
                    <div className="game-background setsize">
                        <div className="row">
                            <div className="col-5"></div>
                            <div className="col-6 custom-padding-top-2">
                                <Indicator satisfaction={this.state.satisfaction} fidelity={this.state.fidelity} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-2"></div>
                            <div id="box-white" className="col-6">
                                <div className="row text-color-black text-left">
                                    <div className={this.state.form_animation ? 'elementToFadeInAndOut' : 'elementToFadeInAndOutOff'}>
                                        <form className="custom-padding-top-15">

                                            <p className="text-left text-regular"> {show_question.pergunta} </p>

                                            {show_alternatives.map((alternative) =>
                                                <div>
                                                    <p>
                                                        <input type="radio"
                                                            name="radio-group"
                                                            id={alternative.id}
                                                            value={alternative.id}
                                                            checked={this.state.current_selected === alternative.id}
                                                            onChange={this.handleChange} />
                                                        <label className="text-left text-extra-bold" htmlFor="sizeSmall">&nbsp; {alternative.descricao}</label>
                                                    </p>
                                                </div>
                                            )}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4"></div>
                        </div>

                        <div className="row custom-btn-position-2">
                            <div className="col-5"></div>
                            <div className="col-2">
                                <div id="box-purple-3" disabled={this.state.disabled}>
                                    <h3 onClick={this.nextMethod} className="text-color-white text-extra-bold button-font">CONFIRMAR</h3>
                                </div>
                            </div>
                            <div className="col-5"></div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default Game;