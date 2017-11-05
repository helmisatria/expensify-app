import React from 'react';
import { shallow } from 'enzyme';
import { NotfoundPage } from '../../components/NotFoundPage';

test('should render NotFoundPage', () => {
  const wrapper = shallow(<NotfoundPage />);
  expect(wrapper).toMatchSnapshot();
});
