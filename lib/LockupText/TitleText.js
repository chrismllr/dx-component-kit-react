import React from 'react';

export const TitleText = ({
  titleLetterSpacing = 'normal',
  titleText = null,
  titleWeight = 'heavy',
  titleSize = 'default',
  titleCase = 'default',
  theme = 'light',
  align
}: TitleTextProps) => {
  let TitleElement;
  const computeTitleEl = () => {
    switch (titleSize) {
      case 'jumbo':
      case 'xx-large':
        TitleElement = 'h1';
        break;
      case 'x-large':
        TitleElement = 'h2';
        break;
      case 'large':
        TitleElement = 'h3';
        break;
      case 'default':
        TitleElement = 'h4';
        break;
      case 'small':
        TitleElement = 'h5';
        break;
      case 'x-small':
        TitleElement = 'h6';
        break;
    }
  };

  const computedTitleClass = () => {
    let classStrs = ['title-text'];
    classStrs.push(`title--${titleSize}`);
    classStrs.push(`title--${titleWeight}`);
    classStrs.push(`title--${align}`);
    classStrs.push(`title--spacing--${titleLetterSpacing}`);
    classStrs.push(`title--theme--${theme}`);
    classStrs.push(`title--case--${titleCase}`);

    return classStrs.toString().replace(/,/g, ' ');
  };

  computeTitleEl();

  return (
    <div>
      <TitleElement className={computedTitleClass()}>
        {titleText}
      </TitleElement>
    </div>
  );
};

type TitleTextProps = {
  titleLetterSpacing?: string,
  titleText?: string,
  titleWeight?: string,
  titleSize?: string,
  titleCase?: string,
  theme?: string,
  align?: string
};

export default TitleText;
