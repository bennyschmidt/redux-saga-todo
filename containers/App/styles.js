import { Dimensions } from 'react-native';
import styled from 'styled-components';

export const Button = styled.TouchableOpacity`
  position: absolute;
  top: ${(Dimensions.get('screen').height - 100)};
  width: ${(Dimensions.get('screen').width - 40)};
  height: 60px;
  margin: 20px;
  background-color: blue;
  border-radius: 5px;
`

export const ButtonText = styled.Text`
  text-align: center;
  color: white;
  line-height: 58px;
  font-weight: bold;
`

export const Screen = styled.View`
  flex: 1;
  background-color: #fefefe;
  align-items: center;
  justify-content: flex-start;
`

export const TextBox = styled.TextInput`
  position: absolute;
  top: ${(Dimensions.get('screen').height - 160)};
  width: ${(Dimensions.get('screen').width - 40)};
  height: 50px;
  margin: 20px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid silver;
  font-size: 18;
`
