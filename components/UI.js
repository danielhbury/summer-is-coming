import React from 'react';
import { View, NativeModules } from 'react-vr';
import CylindricalPanel from 'CylindricalPanel'
import CardContainer from './CardContainer';
import ExpandCardUI from './ExpandCardUI';

export default class UI extends React.Component {
  constructor(props) {
    super(props);
    this.cardConfig = this.props.cardConfig
    this.state = {
      expandCard: false,
      key: null,
      expandedIdx: null,
    };
    this.handleExpand = this.handleExpand.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleApplyNow = this.handleApplyNow.bind(this);
  }

  handleExpand(key, idx) {
    this.setState({
      expandCard: true,
      key,
      expandedIdx: idx,
    });
  }

  handleGoBack() {
    const { handleEnvironmentChange } = this.props;
    this.setState({
      expandCard: false,
      key: null,
      expandedIdx: null,
    });
    handleEnvironmentChange('space.jpg');
  }

  handleApplyNow() {
    NativeModules.LinkingManager.openURL('https://www.americanexpress.com/us/credit-cards/');
  }

  render() {
    const cards = this.cardConfig.map((card, i) =>
      <CardContainer
        key={card.key}
        onClick={() => {
          this.handleExpand(card.key, i);
        }}
        thumbnailSrc={card.thumbnailSrc}
        backgroundSrc={card.backgroundSrc}
        title={card.title}
        subtitle={card.subtitle}
        description={card.description}
        images={card.images}
      />);

    const renderedComponent = this.state.expandCard ? (
      <ExpandCardUI
        handleEnvironmentChange={this.props.handleEnvironmentChange}
        keyValue={this.state.key}
        config={this.cardConfig[this.state.key]}
        expandedIdx={this.state.expandedIdx}
        handleGoBack={this.handleGoBack}
        handleApplyNow={this.handleApplyNow}
      />
    ) : (
        <View
          style={{
            flexDirection: 'row',
            height: 720,
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            transform: [
              { rotateX: 0 },
              { translate: [1600, 4.5, -10] },
            ],
          }}
        >
          {cards}
        </View>
      )

    return (
      <CylindricalPanel
        layer={{
          width: 4096,
          height: 720,
          density: 4680,
          radius: 600
        }}
      >
        {renderedComponent}
      </CylindricalPanel>
    )
  }
};