import React from 'react';
import { bindActionCreators } from 'redux';
import MobilePicker from 'components/MobilePicker';
import { SPINNER_SECTION_CONFIG } from 'components/MobilePicker/MobilePicker';
import PickerItem from 'components/MobilePicker/PickerItem';
import PickerSection from 'components/MobilePicker/PickerSection';
import { days, hours, minutes, AMPMs, formatMinutes } from 'utils/date-generator';
import { mount } from 'enzyme';

import moment from 'moment';

function parseDateToFields (props) {
  const state = {};

  SPINNER_SECTION_CONFIG.forEach(({ field, format }) => {
    const formatted = props.date.format(format);

    if (field === 'minute') {
      const formattedMinutes = formatMinutes(formatted);
      state[field] = formattedMinutes;
    } else {
      state[field] = formatted;
    }
  });

  return state;
}

function constructDate ({ day, hour, minute, ampm }) {
  return moment(`${day} ${moment().format('YYYY')} ${hour}:${minute} ${ampm}`);
};

describe.skip('(Component) MobilePicker', () => {
  let _props, _spies, _wrapper;
  let _mockInitialState;
  let _days, _hours, _minutes, _AMPMs;

  beforeEach(() => {
    _spies = {};
    _props = {
      date: moment(),
      closeFn: (_spies.closeFn = sinon.spy()),
      ...bindActionCreators({
        onChange: (_spies.onChange = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    };

    _wrapper = mount(<MobilePicker {..._props} />);

    _days = days(moment.subtract(3, 'd'), moment.add(3, 'd'));
    _hours = hours();
    _minutes = minutes();
    _AMPMs = AMPMs();

    _mockInitialState = parseDateToFields(_props);
  });

  describe('Upon render, the component...', () => {
    it('Is instantiated with the correct private state', () => {
      expect(_wrapper.state()).to.deep.equal(_mockInitialState);
    });

    it('Should render 4 PickerSections', () => {
      expect(_wrapper).to.have.exactly(4).descendants(PickerSection);
    });

    describe('The `days` PickerSection', () => {
      it('Should have a `vals` prop that is an array of properly formatted dates', () => {
        expect(_wrapper.find(PickerSection).at(0).props().vals).to.be.an('array');
        expect(_wrapper.find(PickerSection).at(0).props().vals[0]).to.equal(_days[0]);
      });

      it('Should render one `PickerItem` for each `day` item in that array', () => {
        expect(_wrapper.find(PickerSection).at(0)).to.have.exactly(_days.length).descendants(PickerItem);
      });
    });

    describe('The `hours` PickerSection', () => {
      it('Should have a `vals` prop that is an array of hours in the day', () => {
        expect(_wrapper.find(PickerSection).at(1).props().vals).to.be.an('array');
        expect(_wrapper.find(PickerSection).at(1).props().vals[0]).to.equal(_hours[0]);
      });

      it('Should render one `PickerItem` for each `hour` item in that array', () => {
        expect(_wrapper.find(PickerSection).at(1)).to.have.exactly(_hours.length).descendants(PickerItem);
      });
    });

    describe('The `minutes` PickerSection', () => {
      it('Should have a `vals` prop that is an array of minutes in an hour, divisible by 5', () => {
        expect(_wrapper.find(PickerSection).at(2).props().vals).to.be.an('array');
        expect(_wrapper.find(PickerSection).at(2).props().vals[0]).to.equal(_minutes[0]);
      });

      it('Should render one `PickerItem` for each `minute` item in that array', () => {
        expect(_wrapper.find(PickerSection).at(2)).to.have.exactly(_minutes.length).descendants(PickerItem);
      });
    });

    describe('The `AMPMs` PickerSection', () => {
      it('Should have a `vals` prop that is an array of AMPMs in the day', () => {
        expect(_wrapper.find(PickerSection).at(3).props().vals).to.be.an('array');
        expect(_wrapper.find(PickerSection).at(3).props().vals[0]).to.equal(_AMPMs[0]);
      });

      it('Should render one `PickerItem` for each `AMPM` item in that array', () => {
        expect(_wrapper.find(PickerSection).at(3)).to.have.exactly(_AMPMs.length).descendants(PickerItem);
      });
    });
  });

  describe('Clicking a PickerItem', () => {
    let _firstDateItem;

    beforeEach(() => {
      _firstDateItem = _wrapper.find(PickerSection).at(0).find(PickerItem).at(0);
    });

    it('Should dispatch `onChange` with the correct modified Date', () => {
      _spies.dispatch.should.not.have.been.called;

      _firstDateItem.simulate('click');

      _spies.onChange.should.have.been.called;
      _spies.dispatch.should.have.been.called;
    });

    it('That `onChange` action should pass the correct modified date as a moment object', () => {
      _firstDateItem.simulate('click');
      const { day, hour, minute, ampm } = _wrapper.state();
      const val = constructDate({ day, hour, minute, ampm });

      _spies.onChange.should.have.been.calledWith(val);
    });
  });
});
