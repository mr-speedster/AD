import React, { Component } from 'react'

export default class Counter extends Component { 
state={
    num:0
}
addclaculator=()=>{
    this.setState({
        num:this.state.num+1
    })
}
subCalculator=()=>{
    this.setState({
        num:this.state.num-1
    })
}
colorChange=()=>{
    document.getElementById("col").style.color="RED";
}

    render() {
        return (
            <div>
                <h1>Its a counting inter face</h1>
                <h2>{this.state.num}</h2>
                <h1 id="col">colors</h1>
                <button onClick={this.colorChange}>click and see the magic</button>
                <button onClick={this.addclaculator}>+</button>
                <button onClick={this.subCalculator}>-</button>
            </div>
        )
    }
}
