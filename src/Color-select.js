import React, { Component } from "react";
import "./Post-it.css"

class Colorselect extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return (
            <li className="color-select" >
                <form 
                    action="" 
                    onChange={(colorName) => this.props.getColorChoice(colorName.target.value)}>
                <label 
                    htmlFor="yellow" 
                    className="color-swatch yellow"></label>
                <input
                    type="radio"
                    id="yellow"
                    name="color-swatch"
                    defaultChecked="checked"/>
                <label htmlFor="pink" className="color-swatch pink"></label>
                <input
                    type="radio"
                    id="pink"
                    name="color-swatch"/>
                <label htmlFor="teal" className="color-swatch teal"></label>
                <input
                    type="radio"
                    id="teal"
                    name="color-swatch"/>
                <label htmlFor="green" className="color-swatch green"></label>
                <input
                    type="radio"
                    id="green"
                    name="color-swatch"/>
                </form>
            </li>
            );
        }
    }

export default Colorselect