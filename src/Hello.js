import './Hello.css'
import React from "react";

class Hello extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            invate : "Your Name please",
            name : "",
            btn_name:"Перевести"
        }
       
    }
    changeText = () =>
    {
        this.setState({name: this.state.name === "Your Name please" ? "Введите Ваше имя" : "Your Name please"});
        this.setState({btn_name: this.state.btn_name === "Translate" ? "Перевести" : "Translate"});
    }
    inputName = () =>
    {
        this.setState({name : document.getElementById("name").value})
    }
    render()
     {
        return(
            <div>
                <input type="text" id="name" placeholder={this.state.invate} onChange ={this.inputName}/>
                <p>Hello {this.state.name}</p>
                <button onClick={this.changeText}>{this.state.btn_name}</button>
            </div>
        )
    }
}
export default Hello;