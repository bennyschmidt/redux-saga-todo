import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodoList } from '../../actions';
import { TodoListItem } from '../../components';
import { List, Loading, LoadingText, Screen } from './styles';

class TodoList extends Component {

  onPressListItem = item => (event) => this.props.onPress(item, event);

  onSwipeListItem = id => (event) => this.props.onSwipeLeft(id, event);

  render() {
    const {
      todoList: {
        isLoading,
        todoListItems
      }
    } = this.props;

    const loadingText = `L O A D I N G . . .`;

    return (
      <Screen>
        {
          isLoading
          ? (
            <Loading>
              <LoadingText>{loadingText}</LoadingText>
            </Loading>
          )
          : (
            <List>
              {
                todoListItems.map((li, i) => <TodoListItem
                  key={li.id}
                  item={li}
                  onPress={this.onPressListItem(li)}
                  onSwipeLeft={this.onSwipeListItem(li.id)}
                />)
              }
            </List>
          )
        }
      </Screen>
    );
  }
}

const mapDispatch = (dispatch) => {
  return bindActionCreators({ getTodoList }, dispatch);
};

export const TodoListContainer = connect(null, mapDispatch)(TodoList);
