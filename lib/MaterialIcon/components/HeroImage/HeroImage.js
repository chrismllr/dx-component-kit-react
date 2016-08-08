import React, { PropTypes, Component } from 'react';
import classes from './HeroImage.scss';
import loadImage from 'helpers/LoadImage';
import conditionalClass from 'helpers/ConditionalClass';

export class HeroImage extends Component {

  constructor (props) {
    super(props);

    this.state = {
      imageSrc: this.props.defaultImg,
      imageSubscription: loadImage(this.props.src, this.props.defaultImg)
        .subscribe(
          (src) => this.setState({ imageSrc: src })
        )
    };
  }

  componentWillUnmount () {
    this.state.imageSubscription.dispose();
  }

  render () {
    const bgClass = `
      ${conditionalClass(!this.props.noOverlay, classes['heroImage--bg'])}
      ${conditionalClass(this.props.contain, classes['heroImage--contain'])}
    `;

    return (
      <div style={{ backgroundImage: `url(${this.state.imageSrc})` }}
        className={`${classes.heroImage} ${bgClass} hero-image`}>
        <div className={classes.heroImage__container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

HeroImage.propTypes = {
  src: PropTypes.any,
  children: PropTypes.any,
  defaultImg: PropTypes.string,
  noOverlay: PropTypes.bool,
  contain: PropTypes.bool
};

export default HeroImage;
