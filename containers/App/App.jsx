import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addTodoListItem, removeTodoListItem, retrieveTodoListItems, toggleTodoListItem } from '../../actions';
import { TodoListContainer } from '../TodoList';
import { Button, ButtonText, Screen, TextBox } from './styles';

const buttonText = `Add`;
const placeholderText = `Add new item`;

class App extends Component {
  static propTypes = {
    addTodoListItem: PropTypes.func.isRequired,
    removeTodoListItem: PropTypes.func.isRequired,
    retrieveTodoListItems: PropTypes.func.isRequired,
    toggleTodoListItem: PropTypes.func.isRequired,
    todoList: PropTypes.object.isRequired
  };
  static defaultProps = {
    addTodoListItem: () => {},
    removeTodoListItem: () => {},
    retrieveTodoListItems: () => {},
    toggleTodoListItem: () => {},
    todoList: {}
  };

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
    const { removeTodoListItem, toggleTodoListItem } = this.props;

    return (
      <Screen>
        <TodoListContainer
          todoList={this.props.todoList}
          onPress={toggleTodoListItem}
          onSwipeLeft={removeTodoListItem}
        />
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
