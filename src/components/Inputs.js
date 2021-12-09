import React from "react";
import './CalcStyle.css';
import { evaluate } from "mathjs";

export default class Inputs extends React.Component{
    constructor(props){
        super(props);
        this.processInput = this.processInput.bind(this);
        this.state = {
            input: "",
            solvedInp: ""
        }
        
    }
    render(){
        return (
            <section >
                <button className="special" onClick={(e) => {this.processInput(e)}}>C</button>
                <button className="special" onClick={(e) => {this.processInput(e)}}>÷</button>
                <button val="7" onClick={this.processInput}>7</button>
                <button onClick={(e) => {this.processInput(e)}}>8</button>
                <button onClick={(e) => {this.processInput(e)}}>9</button>
                <button onClick={(e) => {this.processInput(e)}}>x</button>
                <button onClick={(e) => {this.processInput(e)}}>4</button>
                <button onClick={(e) => {this.processInput(e)}}>5</button>
                <button onClick={(e) => {this.processInput(e)}}>6</button>
                <button onClick={(e) => {this.processInput(e)}}>-</button>
                <button onClick={(e) => {this.processInput(e)}}>1</button>
                <button onClick={(e) => {this.processInput(e)}}>2</button>
                <button onClick={(e) => {this.processInput(e)}}>3</button>
                <button onClick={(e) => {this.processInput(e)}}>+</button>
                <button onClick={(e) => {this.processInput(e)}} className="special">0</button>
                <button onClick={(e) => {this.processInput(e)}}>.</button>
                <button onClick={(e) => {this.processInput(e)}}>=</button>
            </section>
        );
    }
    processInput(e){
        let input = e.target.innerHTML;
        
        if(input === 'C'){
            this.state.input = "";
            this.state.solvedInp = "";
        }
        else if (input === '÷'){
            this.state.input += '/';
        }
        else if (input === 'x'){
            this.state.input += '*';
        }
        else if(input === '='){
            this.state = {
                solvedInput: evaluate(this.state.input),
                input: "",
            }
        }else{
            this.state.input = this.state.input + input;
        }
        const passState = () => {
            [this.state.answer] = this.props.parentsCallback(this.state.solvedInp);
        }
        passState();
    }
}