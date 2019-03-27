import React from 'react';
import { View } from 'react-vr';
import Canvas from './Canvas';
import UI from './UI'

const cardConfig = [
  {
    key: 0,
    thumbnailSrc: 'airplane.jpg',
    backgroundSrc: '',
    title: 'Air',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [{
        name: 'Glacier',
        src: 'glacier.jpeg'
      },
      {
        name: 'Balloons',
        src: 'balloon.jpeg'
      },
      {
        name: 'Waterfall',
        src: 'waterfall.jpeg'
      }
    ]
  },
  {
    key: 1,
    thumbnailSrc: 'travel.jpg',
    backgroundSrc: '',
    title: 'Travel',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [{
        name: 'Venice',
        src: 'venice.jpeg'
      },
      {
        name: 'Iceland',
        src: 'iceland.jpeg'
      },
      {
        name: 'New York',
        src: 'newyork.jpeg'
      }
    ]
  },
  {
    key: 2,
    thumbnailSrc: 'hotel.jpg',
    backgroundSrc: '',
    title: 'Hotel',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [{
        name: 'Lions',
        src: 'lions.jpeg'
      },
      {
        name: 'Lagoon',
        src: 'lagoon.jpeg'
      },
      {
        name: 'Elephants',
        src: 'elephants.jpeg'
      }
    ]
  },
  {
    key: 3,
    thumbnailSrc: 'airplane.jpg',
    backgroundSrc: '',
    title: 'Air',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [{
        name: 'Glacier',
        src: 'glacier.jpeg'
      },
      {
        name: 'Balloons',
        src: 'balloon.jpeg'
      },
      {
        name: 'Waterfall',
        src: 'waterfall.jpeg'
      }
    ]
  },
  {
    key: 4,
    thumbnailSrc: 'travel.jpg',
    backgroundSrc: '',
    title: 'Travel',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [{
        name: 'Venice',
        src: 'venice.jpeg'
      },
      {
        name: 'Iceland',
        src: 'iceland.jpeg'
      },
      {
        name: 'New York',
        src: 'newyork.jpeg'
      }
    ]
  },
  {
    key: 5,
    thumbnailSrc: 'hotel.jpg',
    backgroundSrc: '',
    title: 'Hotel',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [{
        name: 'Lions',
        src: 'lions.jpeg'
      },
      {
        name: 'Lagoon',
        src: 'lagoon.jpeg'
      },
      {
        name: 'Elephants',
        src: 'elephants.jpeg'
      }
    ]
  },
  {
    key: 6,
    thumbnailSrc: 'airplane.jpg',
    backgroundSrc: '',
    title: 'Air',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [{
        name: 'Glacier',
        src: 'glacier.jpeg'
      },
      {
        name: 'Balloons',
        src: 'balloon.jpeg'
      },
      {
        name: 'Waterfall',
        src: 'waterfall.jpeg'
      }
    ]
  },
  {
    key: 7,
    thumbnailSrc: 'travel.jpg',
    backgroundSrc: '',
    title: 'Travel',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [{
        name: 'Venice',
        src: 'venice.jpeg'
      },
      {
        name: 'Iceland',
        src: 'iceland.jpeg'
      },
      {
        name: 'New York',
        src: 'newyork.jpeg'
      }
    ]
  },
  {
    key: 8,
    thumbnailSrc: 'hotel.jpg',
    backgroundSrc: '',
    title: 'Hotel',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [{
        name: 'Lions',
        src: 'lions.jpeg'
      },
      {
        name: 'Lagoon',
        src: 'lagoon.jpeg'
      },
      {
        name: 'Elephants',
        src: 'elephants.jpeg'
      }
    ]
  },
  {
    key: 9,
    thumbnailSrc: 'airplane.jpg',
    backgroundSrc: '',
    title: 'Air',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [{
        name: 'Glacier',
        src: 'glacier.jpeg'
      },
      {
        name: 'Balloons',
        src: 'balloon.jpeg'
      },
      {
        name: 'Waterfall',
        src: 'waterfall.jpeg'
      }
    ]
  },
  {
    key: 10,
    thumbnailSrc: 'travel.jpg',
    backgroundSrc: '',
    title: 'Travel',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [{
        name: 'Venice',
        src: 'venice.jpeg'
      },
      {
        name: 'Iceland',
        src: 'iceland.jpeg'
      },
      {
        name: 'New York',
        src: 'newyork.jpeg'
      }
    ]
  },
  {
    key: 11,
    thumbnailSrc: 'hotel.jpg',
    backgroundSrc: '',
    title: 'Hotel',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [{
        name: 'Lions',
        src: 'lions.jpeg'
      },
      {
        name: 'Lagoon',
        src: 'lagoon.jpeg'
      },
      {
        name: 'Elephants',
        src: 'elephants.jpeg'
      }
    ]
  },
  {
    key: 12,
    thumbnailSrc: 'hotel.jpg',
    backgroundSrc: '',
    title: 'Hotel',
    subtitle: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    description: 'Lorem ipsum dolor sit amet, vim fugit inani delectus te. Mel et augue scriptorem. Ius an suavitate consectetuer, his integre dolorem nusquam et. Ei ius vocibus erroribus, et eos zril iudicabit. Ne his malis inani, nemore similique necessitatibus sit ne. Ad quidam necessitatibus duo.',
    images: [{
        name: 'Lions',
        src: 'lions.jpeg'
      },
      {
        name: 'Lagoon',
        src: 'lagoon.jpeg'
      },
      {
        name: 'Elephants',
        src: 'elephants.jpeg'
      }
    ]
  },
]

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'space.jpg'
    }
  }
  handleEnvironmentChange = (assetName) => {
    this.setState({
      background: assetName
    })
  }
  render() {
    return (
      <View>
        <Canvas background={this.state.background} />
        <UI
          cardConfig={cardConfig}
          handleEnvironmentChange={this.handleEnvironmentChange}
        />
      </View>
    )
  }
};

export default Main;