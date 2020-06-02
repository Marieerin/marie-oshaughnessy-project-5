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
                <label className="small" htmlFor="small">Small</label>
                <input type="radio" id="small" name="font-size" value="small" defaultChecked  />
                <label className="med" htmlFor="med">Medium</label>
                <input type="radio" id="med" name="font-size" value="med" />
                <label className="lrg" htmlFor="lrg">Large</label>
                <input type="radio" id="lrg" name="font-size" value="lrg" />
                <label className="xlrg" htmlFor="xlrg">X-Large</label>
                <input type="radio" id="xlrg" name="font-size" value="xlrg" />
            </li>
        )
    }
}
export default Fontsize