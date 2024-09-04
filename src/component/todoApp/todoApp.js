import React, {Component} from "react";
import './todoApp.css'

export class TodoApp extends Component {

    state = {
        input : "",
        items : []
    }

    handleChange = event => {

        this.setState({
            input : event.target.value
        })

    }

    storeItems = (event) => {

        event.preventDefault()
        const {input} = this.state
       

        this.setState({
            items: [...this.state.items,input],
            input : ""
        })
    }

    deleteTask = (index) => {
        const allItems = [...this.state.items]
        allItems.splice(index,1);

        this.setState({
            items : allItems
        })

    }

    render(){

        const {input,items} = this.state
        
        
        return(

            <div className="todo-container">
                
                
                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>Todo App</h1>
                    <input type=" text" value={input} onChange={this.handleChange} placeholder="Enter list" />

                </form>

                <ul>

                    {items.map((data,index) => (
                        <li key={index} > {data}
                        <button className="delBtn" onClick={() => this.deleteTask(index)}>delete</button>
                        </li>
                    ))}
                    
                </ul>
            </div>
        )
    }
}

export default TodoApp;
