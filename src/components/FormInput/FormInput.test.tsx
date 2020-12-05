import React from 'react';

import renderer from 'react-test-renderer';
import FormInput from '.';

it('renders correctly', () => {
  const component = renderer
    .create(<FormInput onChange={() => {}}/>)
    .toJSON();
  expect(component).toMatchSnapshot();
});