import React from 'react';

export const BodyText = ({
  bodyText = null,
  bodySize = 'default',
  bodyWeight = 'regular',
  theme = 'light',
  align
}: BodyTextProps) => {
  const computedBodyClass = () => {
    let classStrs = ['body-text'];
    classStrs.push(`body--${bodySize}`);
    classStrs.push(`body--${align}`);
    classStrs.push(`body--theme--${theme}`);
    classStrs.push(`body--${bodyWeight}`);

    return classStrs.toString().replace(/,/g, ' ');
  };

  return (
    <p className={computedBodyClass()}>
      {bodyText}
    </p>
  );
};

type BodyTextProps = {
  bodyText?: string,
  bodySize?: string,
  bodyWeight?: string,
  theme?: string,
  align?: string
};

export default BodyText;
