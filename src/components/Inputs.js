import React from "react";
import './CalcStyle.css';
import { evaluate, sign } from "mathjs";
import calc from './Calculator';

export default class Inputs extends React.Component{
    constructor(props){
        super(props);
        this.processInput = this.processInput.bind(this);
        //this.handleKeyDown = this.handleKeyDown.bind(this);
        this.state = {
            input: "",
            solvedInp: "",
            solved: false
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
            this.state.solved = false;
        }
        else if (input === '÷'){
            this.state.input += '/';
        }
        else if (input === 'x'){
            this.state.input += '*';
        }
        else if(input === '='){
            this.state = {
                solvedInp: evaluate(this.state.input),
                input: "",
                solved: true
            }
        }else{
            this.state.input = this.state.input + input;
        }
        this.sendBack();
        
    }
    sendBack() {
        if (this.state.solved) {
            this.props.parentCallback(this.state.solvedInp);
            this.setState({
                solved: false,
                input: ""
            })
            this.props.parent2Call(true);
            console.log(this.state.solvedInp);
            
        }else{
            this.props.parentCallback(this.state.input);
        }
    }
    /*
    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyDown, false);
    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyDown, false);
    }
    
    handleKeyDown(e){
        console.log(e.keyCode);
        switch(e.keyCode){
            case 48:
                this.state.input = this.state.input + '0';
                break;
            case 49:
                this.state.input = this.state.input + '1';
                break;
            case 50:
                this.state = {
                    input: this.state.input + '2'
                }
                break;
            case 51:
                this.state = {
                    input: this.state.input + '3'
                }
                break;
            case 52:
                this.state = {
                    input: this.state.input + '4'
                }
                break;
            case 53:
                this.state.input = this.state.input + '5';
                break;
            case 54:
                this.state.input = this.state.input + '6';
                break;
            case 55:
                this.state.input = this.state.input + '7';
                break;
            case 56:
                this.state.input = this.state.input + '8';
                break;
            case 57:
                this.state.input = this.state.input + '9';
                break;
            case 190:
                this.state.input = this.state.input + '.';
            case 107:
                this.state.input = this.state.input + '+';
                break;
            case 109:
                this.state.input = this.state.input + '-';
                break;
            case 106:
                this.state.input = this.state.input + '*';
                break;
            case 111:
                this.state.input = this.state.input + '/';
                break;
            case 13:
                this.state = {
                    solvedInp: evaluate(this.state.input),
                    input: "",
                    solved: true
                }
                break;
        }
        this.sendBack();
    }*/
}
