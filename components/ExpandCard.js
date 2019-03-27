import React from 'react';
import {
  View,
  Text,
  Image,
  asset,
  VrButton,
} from 'react-vr';

class ExpandCard extends React.Component {
  render() {
    const { title, description, thumbnailSrc, handleGoBack, handleApplyNow } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            width: 350,
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              padding: 20,
              borderBottomColor: '#F7F8F9',
              borderBottomWidth: 1
            }}
          >
            <Text style={{
              color: '#006FCF',
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'left',
              fontFamily: 'Helvetica',
            }}>
              {title}
            </Text>
          </View>
          <View
            style={{
              height: 100,
              width: 350,
              backgroundColor: '#fff',
              padding: 10,
              justifyContent: 'center',
            }}
          >
            <Text style={{
              color: '#53565A',
              fontSize: 16,
              textAlign: 'center',
              fontFamily: 'Helvetica',
            }}>
              {description}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              padding: 10,
              borderTopColor: '#F7F8F9',
              borderTopWidth: 1
            }}
          >
            <VrButton
              onClick={handleGoBack}
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: '#006FCF',
                borderRadius: 6,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: '#006FCF',
                }}
              >
              Go Back
              </Text>
            </VrButton>
            <VrButton
              onClick={handleApplyNow}
              style={{
                padding: 10,
                borderWidth: 1,
                backgroundColor: '#006FCF',
                borderColor: '#006FCF',
                borderRadius: 6,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: '#FFF',
                }}
              >
              Apply Now
              </Text>
            </VrButton>
          </View>
        </View>
        <View
          style={{
            width: 350,
          }}
        >
          <Image
            style={{
              width: 350,
              height: 350,
            }}
            source={asset(thumbnailSrc)}
          />
        </View>
      </View>
    )
  }
}

export default ExpandCard;