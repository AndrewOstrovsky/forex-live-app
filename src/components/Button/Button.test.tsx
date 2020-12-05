import React from 'react';

import renderer from 'react-test-renderer';
import Button from '.';

it('renders correctly', () => {
  const component = renderer
    .create(<Button>Click me</Button>)
    .toJSON();
  expect(component).toMatchSnapshot();
});