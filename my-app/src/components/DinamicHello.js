import React, { Component} from 'react';
import './style.css';


class  DinamicHello  extends Component {
    state = { 
        helloText : "Hello, stranger!"
    }
    render() {
        return (
            <div className="hello-block">
                <input type="text" id="inputName"  className="input-name" onChange={this.handleNameChange}
                placeholder="input your name"></input>
                <p className="hello-string">{this.state.helloText} </p>
            </div>
        );
    };
    
    handleNameChange = (e) =>{
        var  valName = e.currenTarget.value ;// document.getElementById('inputName').value;
      
        var helloString;
        if (valName) {
            helloString = "Hello, "  + valName + "!";
        }
        else
            helloString = "Hello, stranger!";
        this.setState({ helloText : helloString});
    }
    
};

 export default DinamicHello;
