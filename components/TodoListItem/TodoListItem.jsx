import React, { Component } from 'react';
import Swipeout from 'react-native-swipeout';
import { Item, ItemText } from './styles';

export class TodoListItem extends Component {
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
