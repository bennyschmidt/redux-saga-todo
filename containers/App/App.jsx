import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodoListItem, removeTodoListItem, retrieveTodoListItems, toggleTodoListItem } from '../../actions';
import { TodoListContainer } from '../TodoList';
import { Button, ButtonText, Screen, TextBox } from './styles';

class App extends Component {
  state = {
    textBoxValue: ''
  };

  componentWillMount() {
    this.props.retrieveTodoListItems();
  }

  onPressButton = () => {
    const { addTodoListItem, todoList } = this.props;
    const { textBoxValue } = this.state;

    if (textBoxValue.length > 0) {
      this.setState({ textBoxValue: '' });

      addTodoListItem({
        text: textBoxValue,
        completed: false
      });
    }
  };

  render() {
    const buttonText = `Add`;
    const placeholderText = `Add new item`;
    const { removeTodoListItem, toggleTodoListItem } = this.props;

    return (
      <Screen>
        <TodoListContainer todoList={this.props.todoList} onPress={toggleTodoListItem} onSwipeLeft={removeTodoListItem} />
        <TextBox
          onChangeText={(textBoxValue) => this.setState({ textBoxValue })}
          placeholder={placeholderText}
          value={this.state.textBoxValue} />
        <Button onPress={this.onPressButton}>
          <ButtonText>{buttonText}</ButtonText>
        </Button>
      </Screen>
    );
  }
}

const mapDispatch = (dispatch) => {
  return bindActionCreators({
    addTodoListItem,
    removeTodoListItem,
    retrieveTodoListItems,
    toggleTodoListItem
  }, dispatch);
};

const mapState = (state) => {
  const { todoList } = state;

  return { todoList };
};



export const AppContainer = connect(mapState, mapDispatch)(App);

