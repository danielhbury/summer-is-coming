import React from 'react';
import {
  View,
  Text,
  VrButton
} from 'react-vr'
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
      images: this.props.config.images
    }
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
  render() {
    const { title, description, images, thumbnailSrc } = this.state;
    const { expandedIdx, handleGoBack, handleApplyNow } = this.props;
    const allImages = images.map((img, idx) => (
      <View
        key={idx}
        style={{
          backgroundColor: '#FFF',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}
      >
        <VrButton
          onClick={() => this.props.handleEnvironmentChange(img.src)}
        >
          <Text style={{
            color: '#006FCF',
            fontSize: 16,
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
    const xVal = 1600 + (310 * expandedIdx) - (310/2);
    return (
      <View style={{
        height: 720,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        transform: [{
          rotateX: 0
        },
        {
          translate: [xVal, 2.5, -10]
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
      </View>
    )
  }
}

export default ExpandCardUI;