import React from 'react';
import { CheckList, CheckListItem } from 'components/CheckList';
import classes from 'components/CheckList/CheckList.scss';
import MaterialIcon from 'components/MaterialIcon';
import { mount } from 'enzyme';

describe('(Component) CheckListItem', () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = {
      text: 'CheckList Item 1',
      small: true
    };
    _wrapper = mount(<CheckListItem {..._props} />);
  });

  it('Should render a `li`', () => {
    expect(_wrapper.find('li')).to.exist;
  });

  it('Should render a `MaterialIcon` within that `li`', () => {
    expect(_wrapper).to.have.exactly(1).descendants(MaterialIcon);
  });

  it('Should contain `text` provided to the CheckListItem', () => {
    expect(_wrapper.find('li')).to.have.text(`check_circle${_props.text}`);
  });

  describe('The MaterialIcon component', () => {
    it('Should have an iconName of `check_circle`', () => {
      expect(_wrapper.find(MaterialIcon)).to.have.prop('iconName', 'check_circle');
    });

    it('Should have correct class if component is passed a `small` boolean of true', () => {
      expect(_wrapper.find(MaterialIcon)).to.have.prop('className', `
        ${classes.checkList__check}
        ${classes['checkList__check--sm']}
      `);

      _wrapper.setProps({ small: false});
      expect(_wrapper.find(MaterialIcon)).to.have.prop('className', `
        ${classes.checkList__check}
        
      `);
    });
  });
});
