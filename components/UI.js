import React from 'react';
import { View } from 'react-vr';
import CylindricalPanel from 'CylindricalPanel'
import CardContainer from './CardContainer';
import ExpandCard from './ExpandCard';

export default class UI extends React.Component {
  constructor(props) {
    super(props);
    this.cardConfig = this.props.cardConfig
    this.state = {
      expandCard: false,
      key: null
    }
  }

  render() {
    const cards = this.cardConfig.map((card) =>
      <CardContainer
        key={card.key}
        onClick={() => {
          this.props.onClick(card.key);
          this.setState({ expandCard: true, key: card.key })
        }}
        thumbnailSrc={card.thumbnailSrc}
        backgroundSrc={card.backgroundSrc}
        title={card.title}
        subtitle={card.subtitle}
        description={card.description}
      />);

    return this.state.expandCard ? (
      <ExpandCard keyValue={this.state.key} />
    ) : (
        <CylindricalPanel
          layer={{
            width: 4096,
            height: 720,
            density: 4680,
            radius: 4
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              height: 720,
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              transform: [
                { rotateX: 0 },
                { translate: [1600, 2.5, -10] },
              ],
            }}
          >
            {cards}
          </View>
        </CylindricalPanel>
      )
  }
};