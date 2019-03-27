import React from 'react';
import {
  View,
  Text,
  VrButton,
  Animated,
} from 'react-vr'
import { Easing } from 'react-native';
import ExpandCard from './ExpandCard'

class ExpandCardUI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyValue: this.props.keyValue,
      thumbnailSrc: this.props.config.thumbnailSrc,
      backgroundSrc: this.props.config.backgroundSrc,
      title: this.props.config.title,
      subtitle: this.props.config.subtitle,
      description: this.props.config.description,
      images: this.props.config.images,
      animatedX: new Animated.Value(0),
    }
  }

  componentWillMount() {
    this.animateIn();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      keyValue: nextProps.keyValue,
      thumbnailSrc: nextProps.config.thumbnailSrc,
      backgroundSrc: nextProps.config.backgroundSrc,
      title: nextProps.config.title,
      subtitle: nextProps.config.subtitle,
      description: nextProps.config.description,
      images: nextProps.config.images
    });
  }

  animateIn = () => {
    const { expandedIdx } = this.props;
    const xVal = (315 * expandedIdx) - (310 / 2);
    Animated.timing(
      this.state.animatedX, {
        toValue: xVal,
        duration: 1000,
        easing: Easing.in,
      }
    ).start();
  }

  animateOut = () => {
    Animated.timing(
      this.state.animatedX, {
        toValue: 0,
        duration: 1000,
        easing: Easing.in,
      }
    ).start();
  }

  componentWillUnmount() {
    this.animateOut();
  }

  render() {
    const { title, description, images, thumbnailSrc, animatedX } = this.state;
    const { expandedIdx, handleGoBack, handleApplyNow, handleEnvironmentChange } = this.props;
    console.log('hit render', animatedX);
    const allImages = images.map((img, idx) => (
      <View
        key={idx}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <VrButton
          onClick={() => handleEnvironmentChange(img.src)}
          style={{
            padding: 10,
            backgroundColor: '#FFF',
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#006FCF',
          }}
        >
          <Text style={{
            color: '#006FCF',
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Helvetica',
          }}
          >
            {img.name}
          </Text>
        </VrButton>
      </View>
    ))
    const xVal = 1600 + (310 * expandedIdx) - (310 / 2);

    return (
      <Animated.View style={{
        height: 720,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        transform: [
        {
          translateX: animatedX,
        },
        ],
      }}>
        <View
          style={{
            height: 350,
            width: 700,
            backgroundColor: '#FFF',
            alignItems: 'center',
            marginRight: 1,
          }}
        >
          <ExpandCard
            title={title}
            description={description}
            thumbnailSrc={thumbnailSrc}
            handleGoBack={handleGoBack}
            handleApplyNow={handleApplyNow}
          />
        </View>

        <View style={{
          flexDirection: 'column',
          height: 350,
          justifyContent: 'space-around',
          marginLeft: 10,
        }}>
          {allImages}
        </View>
      </Animated.View>
    )
  }
}

export default ExpandCardUI;