import React from 'react'
import { bindActionCreators } from 'redux'
import { RadioList, RadioButton } from 'components/RadioList'
import { mount, shallow } from 'enzyme'

describe.skip('(Component) RadioList', () => {
  let _props, _spies, _wrapper, _options;

  beforeEach(() => {
    _options = ['Koda', 'Mal', 'Nymeria', 'Ghost'];
    _spies = {};
    _props = {
      recordField: 'RadRecordField',
      selectedValue: 'Koda',
      options: _options,
      ...bindActionCreators({
        onChange: (_spies.onChange = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    };
    _wrapper = mount(
      <RadioList { ..._props }>
        {_options.map((op, i) => {
          return <RadioButton
            className={`thisButton${i}`}
            key={i}
            label={op}
            value={op} />;
        })}
      </RadioList>
    );
  });

  describe('Upon render, the component...', () => {
    beforeEach(() => {
      console.log('*******************', _wrapper);
    });

    it('Should Exist', () => {
      expect(_wrapper).to.exist;
      // let _radButton1 = _wrapper.find(RadioButton).get(0);
      // expect(_radButton1).to.exist;

    })
    //
    // it('Should pass the correct `selectedValue` to its RadioButton when passed a `selectedValue` in props', () => {
    //   const selVal = _wrapper.props().selectedValue;
    //   expect(_radButton1).to.have.attr('selectedValue', selVal);
    // });


  });

});
