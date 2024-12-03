import { Component } from "react";
export class AboutUS extends Component{
    constructor(){
        super();
        console.log("the instance of About component is created...")
        this.state={
            no:100
     
        }
        this.increaseCount=this.increaseCount.bind(this)
    }
    increaseCount(){
     this.setState(priviousState=>this.state.no=priviousState.no+1)
    }
    render(){
        return (
        <div>
      <h1>AboutUS is class Component</h1>
      
      <h1>value of no:- {this.state.no}</h1>
      <button onClick={this.increaseCount}>count ++</button>

     </div>
     );
        }
}
export default AboutUS