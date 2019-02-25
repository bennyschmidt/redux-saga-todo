import React, { Component } from 'react';
import Swipeout from 'react-native-swipeout';
import PropTypes from 'prop-types';
import { Item, ItemText } from './styles';

const itemBackgroundColor = `white`;

export class TodoListItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
    onPress: PropTypes.func.isRequired,
    onSwipeLeft: PropTypes.func.isRequired,
    swipeBtns: PropTypes.array.isRequired
  };
  static defaultProps = {
    item: {
      completed: false,
      id: -1,
      text: ''
    },
    onPress: () => {},
    onSwipeLeft: () => {},
    swipeBtns: []
  };

  componentWillMount() {
    const btnBackgroundColor = `red`;
    const btnText = `Delete`;

    const {
      item: { id },
      onSwipeLeft
    } = this.props;

    this.props.swipeBtns[0] = {
      text: btnText,
      backgroundColor: btnBackgroundColor,
      underlayColor: itemBackgroundColor,
      onPress: () => onSwipeLeft(id)
    };
  }

  render() {
    const {
      item: {
        completed,
        id,
        text
      },
      onPress,
      swipeBtns
    } = this.props;

    return (
      <Swipeout right={swipeBtns} autoClose={true} backgroundColor={itemBackgroundColor}>
        <Item onPress={onPress}>
          <ItemText completed={completed}>{text}</ItemText>
        </Item>
      </Swipeout>
    );
  }
}
