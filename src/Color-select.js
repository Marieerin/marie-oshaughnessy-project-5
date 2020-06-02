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
                        className="color-swatch yellow" title="yellow"></label>
                    <input
                        type="radio"
                        id="yellow"
                        value="yellow"
                        name="color-swatch"
                        defaultChecked="checked"/>
                    <label htmlFor="pink" className="color-swatch pink" title="pink"></label>
                    <input
                        type="radio"
                        id="pink"
                        value="pink"
                        name="color-swatch"/>
                    <label htmlFor="teal" className="color-swatch teal" title="teal"></label>
                    <input
                        type="radio"
                        id="teal"
                        value="teal"
                        name="color-swatch"/>
                    <label htmlFor="green" className="color-swatch green" title="green"></label>
                    <input
                        type="radio"
                        id="green"
                        value="green"
                        name="color-swatch"/>
                </form>
            </li>
            );
        }
    }

export default Colorselect