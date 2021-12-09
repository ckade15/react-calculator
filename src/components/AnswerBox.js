import React from "react";

export default class AnswerBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answer: props.answer,
            
        }
        
    }

    render(){
        return(
            <section className="bg-red-500 h-20 w-3/4 ml-0 mr-0 flex place-content-center">
                <div className="bg-red-50 w-5/6 h-3/4 mt-auto mb-auto"></div>
            </section>
        );
    }
}