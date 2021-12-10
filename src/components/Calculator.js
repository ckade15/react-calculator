import React from "react";
import AnswerBox from './AnswerBox';
import Inputs from './Inputs';


export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            expression: "",
            calc: false,
        }
        this.processState = this.processState.bind(this);
        this.processSolved = this.processSolved.bind(this);
        
    }

    render(){
        return(
            <div className="w-3/4 h-fit bg-blue-700 mr-auto ml-auto p-10 flex place-items-center flex-col font-mono font-bold">
                <h1 className="text-4xl pb-2 text-red-50">ReactJS Calculator</h1>
                <AnswerBox answer={this.state.answer}/>
                <Inputs parentCallback={this.processState} parent2Call={this.processSolved}/>
            </div>
        );
    }
    processState = (childData) => {
        
        if (this.state.calc){
            this.setState({
                answer: childData,
                calc: false,
            });
        }else{
          this.setState({answer: childData});  
        }
        
    }
    processSolved = (cData) => {
        this.setState({calc: cData});
    }
    
}