import React from "react";
import './CalcStyle.css';

export default class Inputs extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section >
                <button className="special">C</button>
                <button className="special">÷</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>x</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button className="special">0</button>
                <button>.</button>
                <button>=</button>
            </section>
        );
    }
}