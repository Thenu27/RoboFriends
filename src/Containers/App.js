import React,{Component} from "react";
import CardList from "../components/CardList.js";
import { robots } from "../robots.js";
import SearchBox from "../components/SearchBox.js";
import './App.css';
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundary.js";

class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchField:''

        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json()
    )
       .then(user=>{
        this.setState({robots:user})
       })

        }
    

   onChange=(event)=>{
      this.setState({searchField:event.target.value})
       console.log();
   }

   componentDidCatch(error,info){
        this.setState({hasError:true})
   }

    render(){

        const {robots,searchField}= this.state;

        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
    return(
       <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox search ={this.onChange}/>
       <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
            </ErrorBoundry>  
       </Scroll> 
       </div>  
    )
  }
}



export default App;