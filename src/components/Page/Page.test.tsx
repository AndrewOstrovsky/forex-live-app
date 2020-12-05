import React from 'react';

import renderer from 'react-test-renderer';
import Page from '.';

it('renders correctly', () => {
  const component = renderer
    .create(<Page />)
    .toJSON();
  expect(component).toMatchSnapshot();
});