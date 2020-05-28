import React, { Component } from "react";
class Fontsize extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <li>
                <label htmlFor="small">Small</label>
                <input type="radio" id="small" name="font-size" />
                <label htmlFor="med">Medium</label>
                <input type="radio" id="med" name="font-size" />
                <label htmlFor="lrg">Large</label>
                <input type="radio" id="lrg" name="font-size" />
            </li>
        )
    }
}
export default Fontsize