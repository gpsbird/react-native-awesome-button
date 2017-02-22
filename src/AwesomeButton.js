import React, { Component, PropTypes } from 'react';
import {
  Animated,
  TouchableOpacity,
  View,
} from 'react-native';

import ButtonView from './ButtonView';


class AwesomeButton extends Component {
  static propTypes = {
    states: PropTypes.object.isRequired,
    buttonState: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      viewState: this.props.states[this.props.buttonState] ||
        this.props.states[Object.keys(this.props.states)[0]]
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.buttonState) {
      this.setState({ viewState: newProps.states[newProps.buttonState] });
    }
  }

  render() {
    const { backgroundStyle, labelStyle, text, spinner, onPress } = this.state.viewState;
    return (
      <ButtonView
        backgroundStyle={backgroundStyle}
        labelStyle={labelStyle}
        text={text}
        spinner={spinner}
        onPress={onPress}
        disabled={onPress ? false : true}
      />
    );
  }
}

AwesomeButton.defaultProps = {
  buttonState: 'default'
};

export default AwesomeButton;
