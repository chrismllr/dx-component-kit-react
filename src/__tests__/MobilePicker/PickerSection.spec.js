import React from 'react';
import PickerSection from 'components/MobilePicker/PickerSection';
import PickerItem from 'components/MobilePicker/PickerItem';
import { days } from 'utils/date-generator';
import { mount } from 'enzyme';

describe('(Component) MobilePicker/PickerSection', () => {
  let _props, _spies, _wrapper;

  beforeEach(() => {
    _spies = {};
    _props = {
      children: <div id='im-a-child' />,
      prop: 'day',
      vals: days(),
      selectedVal: days()[15],
      increase: (_spies.increase = sinon.spy()),
      decrease: (_spies.decrease = sinon.spy())
    };

    _wrapper = mount(
      <PickerSection {..._props}>
        {days().map((p) => {
          return <PickerItem key={p} />;
        })}
      </PickerSection>
    );
  });

  describe('Upon render, the component...', () => {
    it('Should render a button with an `decrease` icon', () => {
      expect(_wrapper.find('a').at(0).find('i')).to.exist;
      expect(_wrapper.find('a').at(0).find('i')).to.have.className('spark-icon-arrow-chevron-up');
    });

    it('Should render a button with an `increase` icon', () => {
      expect(_wrapper.find('a').at(1).find('i')).to.exist;
      expect(_wrapper.find('a').at(1).find('i')).to.have.className('spark-icon-arrow-chevron-down');
    });

    it('Should render the correct amount of `PickerItem` children', () => {
      expect(_wrapper).to.have.exactly(days().length).descendants(PickerItem);
    });
  });

  describe('When the `decrease` btn is clicked', () => {
    it('Should call the `decrease` function', () => {
      _spies.decrease.should.not.have.been.called;

      _wrapper.find('a').at(0).simulate('click');

      _spies.decrease.should.have.been.called;
    });

    it('With the correct arguments', () => {
      _wrapper.find('a').at(0).simulate('click');
      _spies.decrease.should.have.been.calledWith(_props.prop, _props.vals, _props.selectedVal);
    });
  });

  describe('When the `increase` btn is clicked', () => {
    it('Should call the `increase` function', () => {
      _spies.increase.should.not.have.been.called;

      _wrapper.find('a').at(1).simulate('click');

      _spies.increase.should.have.been.called;
    });

    it('With the correct arguments', () => {
      _wrapper.find('a').at(1).simulate('click');
      _spies.increase.should.have.been.calledWith(_props.prop, _props.vals, _props.selectedVal);
    });
  });
});
