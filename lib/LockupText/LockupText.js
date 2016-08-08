import React, { PropTypes } from 'react';
import TitleText from './TitleText';
import BodyText from './BodyText';

export const LKText = ({
  bodyText = null,
  bodySize = 'default',
  bodyWeight = 'regular',
  align = 'left',
  spacing = 'default',
  titleLetterSpacing = 'default',
  titleText = null,
  titleWeight = 'heavy',
  titleSize = 'default',
  titleCase = 'default',
  bg = 'default',
  theme
}: LKTextProps) => {
  const computedClass = () => {
    let classes = ['lockup'];

    classes.push(`lockup--${spacing}`);
    return classes.toString().replace(/,/g, ' ');
  };

  return (
    <div className={computedClass()}>
      {
        titleText
          ? <TitleText
            align={align}
            theme={theme}
            titleText={titleText}
            titleWeight={titleWeight}
            titleSize={titleSize}
            titleCase={titleCase}
            titleLetterSpacing={titleLetterSpacing} />
          : null
      }
      {
        bodyText
          ? <BodyText
            align={align}
            theme={theme}
            bodyText={bodyText}
            bodyWeight={bodyWeight}
            bodySize={bodySize} />
          : null
      }
    </div>
  );
};

LKText.propTypes = {
  bodyText: PropTypes.string,
  bodySize: PropTypes.string,
  bodyWeight: PropTypes.string,
  align: PropTypes.string,
  spacing: PropTypes.string,
  titleLetterSpacing: PropTypes.string,
  titleText: PropTypes.string,
  titleWeight: PropTypes.string,
  titleSize: PropTypes.string,
  titleCase: PropTypes.string,
  bg: PropTypes.string,
  theme: PropTypes.string
};

type LKTextProps = {
  bodyText?: string,
  bodySize?: string,
  bodyWeight?: string,
  align?: string,
  titleLetterSpacing?: string,
  spacing?: string,
  titleText?: string,
  titleWeight?: string,
  titleSize?: string,
  bg?: string,
  theme?: string
};

export default LKText;
