import React from "react";
import AnswerBox from './AnswerBox';
import Inputs from './Inputs';


export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: null,
        }
    }

    render(){
        return(
            <div className="w-3/4 h-fit bg-blue-700 mr-auto ml-auto p-10 flex place-items-center flex-col font-mono font-bold">
                <h1 className="text-4xl pb-2 text-red-50">ReactJS Calculator</h1>
                <AnswerBox />
                <Inputs />
            </div>
        );
    }
    parentsCallback = (childData) => {
        this.setState({
            answer: childData,
        });
    }
    
    
}