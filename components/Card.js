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
      }}>
        <Image
          style={{
            width: 300,
            height: 160,
          }}
          source={asset(thumbnailSrc)}
        >
        </Image>
        <View style={{
          paddingBottom: 1
        }}>
          <Text style={{
            color: '#006FCF',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Helvetica'
          }}>
            {title}
          </Text>
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