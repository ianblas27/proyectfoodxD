import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('w2cook', () => App);
import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
export default class GeneralExample extends Component {
  render() {
    return (
      <Container>
        <Button>
          <Text>
            Button
          </Text>
        </Button>
      </Container>
    );
  }
}