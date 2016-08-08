import React from 'react';
import Milestone from 'components/ProgressBar/Milestone';
import classes from 'components/ProgressBar/ProgressBar.scss';
import { mount } from 'enzyme';

const completedCls = classes['milestone__badge--completed'];
const finalCls = classes['finalBadgeComplete'];

describe('(Component) Milestone', () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = {
      currentStep: 1,
      numberOfSteps: 8,
      number: 2
    };
    _wrapper = mount(<Milestone {..._props} />);
  });

  it('Should render a span with its `number`', () => {
    expect(_wrapper.find('span > p')).to.have.text(_props.number);
  });

  it('Should have a `final` class if passed boolean of `final=true` and progress is at 100%', () => {
    _wrapper.setProps({ final: true, currentStep: 8 });
    expect(_wrapper.find('span')).to.have.className(`${finalCls}\n`);
  });

  it('Should have a `completed` class if the overall progress has eclipsed the current Milestone', () => {
    _wrapper.setProps({ currentStep: 6 });
    expect(_wrapper.find('span')).to.have.className(`${completedCls}\n`);
  });
});
