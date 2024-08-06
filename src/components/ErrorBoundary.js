import React, { Component } from "react";

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
        
    }


render(){
    if(this.state.hasError){
        return <h1>ERROR!!</h1>;
    }else{
        return this.props.children;
    }
 }
}
export default ErrorBoundry;