import React from 'react';
import ProgressBar from 'components/ProgressBar';
import Milestone from 'components/ProgressBar/Milestone';
import classes from 'components/ProgressBar/ProgressBar.scss';
import { mount } from 'enzyme';

const completedCls = classes['milestone__badge--completed'];

describe('(Component) ProgressBar', () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = {
      currentStep: 1,
      numberOfSteps: 8
    };
    _wrapper = mount(<ProgressBar {..._props} />);
  });

  it('Should contain (4) `Milestone` children', () => {
    expect(_wrapper).to.have.exactly(4).descendants(Milestone);
  });

  it('Should contain a progress indicator, with the width based on curStep / numSteps', () => {
    const percent = (_props.currentStep / _props.numberOfSteps) * 100;
    expect(_wrapper.find('div[data-ref="progress-indicator"]')).to.have.style('width', `${percent}%`);
  });

  describe('The Milestone children', () => {
    it('Should contain the parent props', () => {
      expect(_wrapper.find(Milestone).at(0)).to.have.prop('currentStep', _props.currentStep);
      expect(_wrapper.find(Milestone).at(0)).to.have.prop('numberOfSteps', _props.numberOfSteps);
    });

    it('The last milestone should have a boolean of `final` to be true', () => {
      expect(_wrapper.find(Milestone).at(3)).to.have.prop('final', true);
    });

    it('At step 1 of 8, only first Milestone should have a completed class', () => {
      _wrapper.setProps({ currentStep: 1 });
      expect(_wrapper.find(Milestone).at(0).find('span')).to.have.className(`${completedCls}\n`);
      expect(_wrapper.find(Milestone).at(1).find('span')).to.not.have.className(`${completedCls}\n`);
      expect(_wrapper.find(Milestone).at(2).find('span')).to.not.have.className(`${completedCls}\n`);
      expect(_wrapper.find(Milestone).at(3).find('span')).to.not.have.className(`${completedCls}\n`);
    });

    it('At step 4 of 8, (2) Milestones should have a completed class', () => {
      _wrapper.setProps({ currentStep: 4 });
      expect(_wrapper.find(Milestone).at(0).find('span')).to.have.className(`${completedCls}\n`);
      expect(_wrapper.find(Milestone).at(1).find('span')).to.have.className(`${completedCls}\n`);
      expect(_wrapper.find(Milestone).at(2).find('span')).to.not.have.className(`${completedCls}\n`);
      expect(_wrapper.find(Milestone).at(3).find('span')).to.not.have.className(`${completedCls}\n`);
    });
  });


});
