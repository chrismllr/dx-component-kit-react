import React, { Component, PropTypes } from 'react';
import { days, hours, minutes, AMPMs, formatMinutes } from 'utils/date-generator';
import classes from './MobilePicker.scss';
import PickerItem from './PickerItem';
import PickerSection from './PickerSection';
import moment from 'moment';

export const DATE_FORMAT_STR = 'ddd, MMM D';

export const SPINNER_SECTION_CONFIG = [
  { field: 'day', format: DATE_FORMAT_STR },
  { field: 'hour', format: 'h' },
  { field: 'minute', format: 'mm' },
  { field: 'ampm', format: 'A' }
];

export class MobilePicker extends Component {
  constructor (props) {
    super(props);

    this.lists = {
      days: days(props.date.subtract(3, 'd'), props.date.add(3, 'd')),
      hours: hours(),
      minutes: minutes(),
      AMPMs: AMPMs()
    };

    this.state = {
      day: '',
      hour: '',
      minute: '',
      ampm: ''
    };
  }

  componentWillMount () {
    this.parseDateToFields(this.props);
  }

  componentWillReceiveProps (nextProps) {
    this.parseDateToFields(nextProps);
  }

  parseDateToFields (props) {
    SPINNER_SECTION_CONFIG.forEach(({ field, format }) => {
      let formatted = moment(props.date).format(format);

      if (field === 'minute') {
        formatted = formatMinutes(formatted);
      }

      this.setState({
        [field]: formatted
      });
    });
  }

  constructDate = ({ day, hour, minute, ampm }) =>
    moment(`${day} ${moment().format('YYYY')} ${hour}:${minute} ${ampm}`);

  itemClicked = (type, e) => {
    this.state = Object.assign({}, this.state, {
      [type]: e.target.dataset.value
    });

    this.props.onChange(this.constructDate(this.state));
  }

  increase = (field, vals, curSelectedVal) => {
    const currentIndex = vals.indexOf(curSelectedVal);
    this.state = Object.assign({}, this.state, {
      [field]: (vals.length - 1) !== currentIndex
        ? vals[currentIndex + 1]
        : curSelectedVal
    });

    this.props.onChange(this.constructDate(this.state));
  };

  decrease = (field, vals, curSelectedVal) => {
    const currentIndex = vals.indexOf(curSelectedVal);
    this.state = Object.assign({}, this.state, {
      [field]: currentIndex !== 0
        ? vals[currentIndex - 1]
        : curSelectedVal
    });

    this.props.onChange(this.constructDate(this.state));
  };

  render () {
    const { days, hours, minutes, AMPMs } = this.lists;

    return (
      <div className={`flex-container ${classes.picker}`}>
        <div className={classes.picker__spinner}>
          <PickerSection
            vals={days}
            selectedVal={this.state.day}
            increase={this.increase}
            decrease={this.decrease}
            prop={'day'}
            className={classes['picker__section--lg']}>

            {days.map((day, i) =>
              <PickerItem
                key={i}
                index={i}
                onClick={this.itemClicked}
                value={day}
                isActive={day === this.state.day} />
            )}

          </PickerSection>

          <PickerSection
            vals={hours}
            prop={'hour'}
            increase={this.increase}
            decrease={this.decrease}
            selectedVal={this.state.hour}
            className={classes['picker__section--md']}>

            {hours.map((h, i) =>
              <PickerItem
                key={i}
                index={i}
                onClick={this.itemClicked}
                value={h}
                isActive={h === this.state.hour} />
            )}

          </PickerSection>

          <PickerSection
            vals={minutes}
            prop={'minute'}
            increase={this.increase}
            decrease={this.decrease}
            selectedVal={this.state.minute}
            className={classes['picker__section--md']}>

            {minutes.map((min, i) =>
              <PickerItem
                key={i}
                index={i}
                onClick={this.itemClicked}
                value={min}
                isActive={min === this.state.minute} />
            )}

          </PickerSection>

          <PickerSection
            vals={AMPMs}
            prop={'ampm'}
            increase={this.increase}
            decrease={this.decrease}
            selectedVal={this.state.ampm}
            className={classes['picker__section--sm']}>

            {AMPMs.map((ampm, i) =>
              <PickerItem
                key={i}
                index={i}
                onClick={this.itemClicked}
                value={ampm}
                isActive={ampm === this.state.ampm} />
            )}

          </PickerSection>

          <div className={`${classes['picker__select-box']}`}></div>
        </div>

        <button className='spark-btn spark-btn--sm spark-btn--plain btn--full'
          onClick={this.props.closeFn}>Done</button>
      </div>
    );
  }
}

MobilePicker.propTypes = {
  date: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  closeFn: PropTypes.func.isRequired
};

export default MobilePicker;
