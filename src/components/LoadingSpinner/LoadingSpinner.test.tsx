import React from 'react';

import renderer from 'react-test-renderer';
import LoadingSpinner from '.';

it('renders correctly', () => {
  const component = renderer
    .create(<LoadingSpinner />)
    .toJSON();
  expect(component).toMatchSnapshot();
});