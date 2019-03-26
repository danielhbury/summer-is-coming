import React from 'react';
import {
  View,
  Text,
  Image,
  asset
} from 'react-vr'

class ExpandCard extends React.Component {
  render () {
    const { title, description, thumbnailSrc } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <Text style={{
          color: 'lightgrey',
          fontSize: .5,
          fontWeight: 'bold',
          textAlign: 'left',
          fontFamily: 'Helvetica',
          padding: 1,
        }}>
          {title}
        </Text>
        <Text style={{
          color: 'grey',
          fontSize: .5,
          textAlign: 'center',
          fontFamily: 'Helvetica',
        }}>
          {description}
        </Text>
        <Image
          style={{
            width: 10,
            height: 10,
          }}
          source={asset(thumbnailSrc)}
        />
      </View>
    )
  }
}

export default ExpandCard;