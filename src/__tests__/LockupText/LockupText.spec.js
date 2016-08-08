import React from 'react';
import {
  TitleText,
  BodyText,
  default as LockupText
} from 'components/LockupText';
import { mount } from 'enzyme';

describe('(Component) LockupText', () => {
  let _wrapper, _props;

  beforeEach(() => {
    _props = {
      theme: 'white',
      spacing: 'large',
      titleText: 'This is a Title',
      bodyText: 'This is body text.'
    };
    _wrapper = mount(<LockupText {..._props} />);
  });

  describe('Upon render, the component...', () => {
    let _newProps;
    let _noTitleBodyMount;

    beforeEach(() => {
      _newProps = { theme: 'white', spacing: 'large' };
      _noTitleBodyMount = mount(<LockupText {..._newProps} />);
    });

    it('Should render a div with a `lockup--` class relative to the `spacing` prop', () => {
      expect(_wrapper.find('.lockup')).to.have.className(`lockup--${_props.spacing}`);
    });

    it('Should render a `TitleText` component only if `titleText` is provided', () => {
      expect(_wrapper.find(TitleText)).to.exist;
      expect(_noTitleBodyMount.find(TitleText)).to.not.exist;
    });

    it('Should render a `BodyText` component only if `bodyText` is provided', () => {
      expect(_wrapper.find(BodyText)).to.exist;
      expect(_noTitleBodyMount.find(BodyText)).to.not.exist;
    });
  });

  describe('The `TitleText` component', () => {
    it('Should be passed all of the correct `title$$` props', () => {
      expect(_wrapper.find(TitleText)).to.have.prop('titleText', _props.titleText);
      expect(_wrapper.find(TitleText)).to.have.prop('titleWeight', 'heavy');
      expect(_wrapper.find(TitleText)).to.have.prop('titleLetterSpacing', 'default');
      expect(_wrapper.find(TitleText)).to.have.prop('titleSize', 'default');
      expect(_wrapper.find(TitleText)).to.have.prop('titleCase', 'default');
      expect(_wrapper.find(TitleText)).to.have.prop('theme', _props.theme);
    });
  });

  describe('The `BodyText` component', () => {
    it('Should be passed all of the correct `body$$` props', () => {
      expect(_wrapper.find(BodyText)).to.have.prop('bodyText', _props.bodyText);
      expect(_wrapper.find(BodyText)).to.have.prop('bodySize', 'default');
      expect(_wrapper.find(BodyText)).to.have.prop('bodyWeight', 'regular');
      expect(_wrapper.find(BodyText)).to.have.prop('theme', _props.theme);
    });
  });
});
