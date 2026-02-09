import './Lenth.css';
import React from "react";

class Length extends React.Component{
    constructor(props)
    {
        super(props);
        this.state ={
            length:100
        }
    }
    setLength = () =>
    {
        document.getElementById("square").style.width = this.state.length;
        document.getElementById("square").style.height = this.state.length;
    }
     inc = () =>
    {
        this.setState({length: this.state.length + 10});
        this.setLength();
    }
    dec = () =>
    {
        this.setState({length: this.state.length - 10});
        this.setLength();
    }
    reset = () =>
    {
        this.setState({length : 100});
        this.setLength();
    }
    render()
    {
        return(
            <div>
                <button onClick={this.inc}>Ins</button>
                <button onClick={this.dec}>Dec</button>
                <button onClick={this.reset}>Reset</button>
                //let style = `whidth:${this.state.length}px,height:${this.state.length}px`;
                <div id ="square" style={{width:this.state.length, height:this.state.length}}> </div>
                //this.setLength();
            </div>
        )
    }
}
export default Length;