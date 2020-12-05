import React from 'react';

import renderer from 'react-test-renderer';
import Table from '.';

const testData =[
    {
        "ticker" : "EUR/USD",
        "bid" : "1.21218",
        "ask" : "1.21218",
        "changes" : -0.20006421814409003,
    }, {
        "ticker" : "USD/JPY",
        "bid" : "104.188",
        "ask" : "104.188",
        "changes" : 0.33609722743863457,
  }
]

it('renders correctly', () => {
  const component = renderer
    .create(<Table data={testData}/>)
    .toJSON();
  expect(component).toMatchSnapshot();
});