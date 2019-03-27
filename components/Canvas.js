import React from 'react';
import { asset, VrAnimated, Animated } from 'react-vr'
import { Easing } from 'react-native';

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      background: this.props.background,
      animatedX: new Animated.Value(0),
    }
    this.startRotation = this.startRotation.bind(this);
    this.endRotation = this.endRotation.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.background === 'space.jpg') this.startRotation();
    if(nextProps.background !== 'space.jpg') this.endRotation();
    this.setState({
      background: nextProps.background
    });
  }

  startRotation() {
    Animated.timing(
      this.state.animatedX, {
        toValue: 360,
        duration: 120000,
        easing: Easing.in,
      }
    ).start();
  }

  endRotation() {
    this.setState({
      animatedX: new Animated.Value(0),
    });
  }

  render() {
    const { background, animatedX } = this.state;
    return (
      <VrAnimated.Pano onLoad={this.startRotation} source={asset(background)} style={{ transform: [{ rotateY: animatedX }]}} />
    );
  }
};

export default Canvas;