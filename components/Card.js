import React from 'react'
import { View, Text, Image, asset } from 'react-vr'

class Card extends React.Component {
  render() {
    const {
      thumbnailSrc,
      backgroundSrc,
      title,
      subtitle,
      description
    } = this.props
    return (
      <View style={{
        width: 300,
        height: 300,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Image
          style={{
            width: 300,
            height: 160,
          }}
          source={asset(thumbnailSrc)}
        >
        </Image>
        <View>
          <Text style={{
            color: '#006FCF',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Helvetica'
          }}>
            {title}
          </Text>
        </View>
        <View
          style={{
            height: 100,
            width: 300,
            backgroundColor: '#fff',
            padding: 10,
          }}
        >
          <Text style={{
            color: '#53565A',
            fontSize: 12,
            textAlign: 'center',
            fontFamily: 'Helvetica'
          }}>
            {subtitle}
          </Text>
        </View>
      </View>
    );
  }
};
export default Card;