
import React, { Component } from 'react';
import TodoTable from '../components/todoTable';
import * as TodoActions from '../actions/todoActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class TodoContainer extends Component {
    constructor(props) {
        super(props)
    }

    // Todo Container methods dispatch the actions to the reducer functions.

    createTodo = (todo) => {
        this.props.actions.CreateTodo(todo)
    }

    startEditing = (id) => {
        this.props.actions.StartEditing(id)
    }

    cancelEditing = (id) => {
        this.props.actions.CancelEditing(id)
    }

    editTodo = (todo) => {
        this.props.actions.UpdateTodo(todo)
    }

    completeTodo = (todo) => {
        this.props.actions.UpdateTodo({...todo, status: 'done'})
    }

    deleteTodo = (todo) => {
        this.props.actions.DeleteTodo(todo)
    }

    render() {
        return (
            <div className="todo-container">
                <TodoTable
                    todos={this.props.todos}
                    createTodo={this.createTodo}
                    startEditing={this.startEditing}
                    cancelEditing={this.cancelEditing}
                    editTodo={this.editTodo}
                    completeTodo = {this.completeTodo}
                    deleteTodo = {this.deleteTodo}
                />
            </div>
        );
    }
}

// This maps the state to the property of the component
function mapStateToProps(state, ownProps){
    return {
        todos: state.todos
    }
}

// This maps the dispatch to the property of the component
function mapStateToDispatch(dispatch){
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(TodoContainer);
