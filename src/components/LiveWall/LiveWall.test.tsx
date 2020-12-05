import React from 'react';

import renderer from 'react-test-renderer';
import LiveWall from '.';

it('renders correctly', () => {
  const component = renderer
    .create(<LiveWall />)
    .toJSON();
  expect(component).toMatchSnapshot();
});