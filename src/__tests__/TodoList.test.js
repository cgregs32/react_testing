import React from 'react';
import { shallow, mount } from 'enzyme';
import ConnectedComponent, { TodoList } from '../TodoList';
import toJson from 'enzyme-to-json';
import { reduxHelper } from '../reduxHelper';

const initialState = { items: [] }

describe(<TodoList />, () => {

  describe('render', () => {
    let component;

    beforeEach( () => {
      const tree = reduxHelper(ConnectedComponent, initialState).component
      component = mount(tree);
    });

    it('renders w/o crashing', () => {
      expect(toJson(component)).toMatchSnapshot();
    });

  });

  describe('functionality', () => {
    let component;

    beforeEach( () => {
      component = mount(<TodoList />)
      let input = component.find('input');
      input.simulate('focus');
      inpit.simulate(
        'change',
        { target: { name: 'name', value: 'hello' }}
      )
    });

    it('submits the form', () => {
      let component = shallow(<TodoList items={[]} />)
      expect(component.state('items').length).toEQual(0)
      component.find('form').simulate('submit');
      expect(component.state('items').length).toEqual(1);
    })

    it('updates state on change', () => {
      expect(component.state('name')).toEqual('hello')
    });

  });

});
