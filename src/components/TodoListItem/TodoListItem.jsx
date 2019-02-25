import React, { Component } from 'react';
import Swipeout from 'react-native-swipeout';
import PropTypes from 'prop-types';
import { Item, ItemText } from './styles';

export class TodoListItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
    onPress: PropTypes.func.isRequired,
    onSwipeLeft: PropTypes.func.isRequired
  };
  static defaultProps = {
    item: {
      completed: false,
      id: -1,
      text: ''
    },
    onPress: () => {},
    onSwipeLeft: () => {}
  };

  render() {
    const {
      item: {
        completed,
        id,
        text
      },
      onPress,
      onSwipeLeft
    } = this.props;

    const backgroundColor = `transparent`;
    const btnBackgroundColor = `red`;
    const btnText = `Delete`;
    const underlayColor = `white`;

    const swipeBtnDelete = {
      text: btnText,
      backgroundColor: btnBackgroundColor,
      underlayColor,
      onPress: () => onSwipeLeft(id)
    };

    const swipeBtns = [swipeBtnDelete];

    return (
      <Swipeout right={swipeBtns} autoClose={true} backgroundColor={backgroundColor}>
        <Item onPress={onPress}>
          <ItemText completed={completed}>{text}</ItemText>
        </Item>
      </Swipeout>
    );
  }
}
