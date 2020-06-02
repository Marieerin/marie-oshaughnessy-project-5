import React, { Component } from "react";
class Fontsize extends Component{
    constructor(){
        super()
        this.state = {
        }
    }
    render(){
        return(
            <li className="font-size" onChange={(fontSize) => this.props.getFontSize(fontSize.target.value)}>
                <label htmlFor="small">Small</label>
                <input type="radio" id="small" name="font-size" value="small" defaultChecked  />
                <label htmlFor="med">Medium</label>
                <input type="radio" id="med" name="font-size" value="med" />
                <label htmlFor="lrg">Large</label>
                <input type="radio" id="lrg" name="font-size" value="lrg" />
                <label htmlFor="xlrg">X-Large</label>
                <input type="radio" id="xlrg" name="font-size" value="xlrg" />
            </li>
        )
    }
}
export default Fontsize