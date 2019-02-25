import { Dimensions } from 'react-native';
import styled from 'styled-components';

export const Item = styled.TouchableOpacity`
  border: 0 solid #ddd;
  border-bottom-width: 1px;
  width: ${Dimensions.get('screen').width};
  height: 80px;
  padding: 30px 20px;
`;

export const ItemText = styled.Text`
  text-decoration: solid ${props => props.completed ? 'line-through' : 'none'};
  opacity: ${props => props.completed ? 0.75 : 1};
`;
