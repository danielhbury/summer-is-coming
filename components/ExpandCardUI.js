import React from 'react';
import {
  View,
  Text,
  VrButton
} from 'react-vr'
import ExpandCard from './ExpandCard'

class ExpandCardUI extends React.Component {
  constructor(props){
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
  render () {
    const { title, description, images, thumbnailSrc } = this.state
    const allImages = images.map((img, idx) => (
      <View
        key={idx}
        style={{
          // width: 10,
          backgroundColor: '#FFF',
          alignItems: 'center',
          padding: 1,
          marginBottom: 2,
          transform: [{
              rotateX: 0
            },
            {
              translate: [-9.3, 3.5, -10]
            },
          ],
        }}
      >
        <VrButton
          onClick={() => this.props.handleEnvironmentChange(img.src)}
        >
          <Text style={{
            color: 'lightgrey',
            fontSize: .5,
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
    return (
      
      <View style={{
        // height: 20,
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'row',
        transform: [{
            rotateX: 0
          },
          {
            translate: [-9.3, 4, -10]
          },
        ],
      }}>
        <View
          style={{
            height: 10,
            width: 20,
            backgroundColor: '#FFF',
            alignItems: 'center',
            marginRight:1,
            transform: [{
                rotateX: 0
              },
              {
                translate: [-9.3, 4, -10]
              },
            ],
          }}
        >
          <ExpandCard
            title={title}
            description={description}
            thumbnailSrc={thumbnailSrc}
          />
        </View>

        <View style={{
          flexDirection: 'column',
        }}>
          {allImages}
        </View>
      </View>
    )
  }
}

export default ExpandCardUI;