import React from 'react';
import MaterialIcon from 'components/MaterialIcon';
import { shallow } from 'enzyme';

describe('(Component) MaterialIcon', () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = {
      iconName: 'lock',
      className: 'cool-icon-dude'
    };
    _wrapper = shallow(<MaterialIcon {..._props} />);
  });

  it('Should render an `i` tag ', () => {
    expect(_wrapper.find('i')).to.exist;
  });

  it('Which has className `material-icons`, along with optional className', () => {
    expect(_wrapper.find('i')).to.have.className('material-icons');
    expect(_wrapper.find('i')).to.have.className('cool-icon-dude');
  });

  it('Sets the `i` tag\'s innerText to the provided `props.iconName`', () => {
    expect(_wrapper.find('i')).to.have.text(_props.iconName);
  });
});
