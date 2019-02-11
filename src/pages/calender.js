import React from 'react';
// import { Link } from 'gatsby'
import moment from 'moment';
import Layout from '../components/Layout';
import './calender.sass';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    let monthDate = moment().startOf('month');
    let days = new Array(monthDate.daysInMonth()).fill('test').map((_, i) => {
      // let days = [...Array(monthDate.daysInMonth())].map((_, i) => {
      return monthDate.clone().add(i, 'day');
    });
    this.state = { days };
    console.log(days);
    //console.log(monthDate.daysInMonth());
  }

  column(index) {
    return index === 0 ? this.state.days[0].day() : 0;
  }
  today(day) {
    return moment().isSame(day, 'day');
  }
  render() {
    const { days } = this.state;
    return (
      <Layout>
        <section className="calender">
          <div id="calendar">
            {['M', 'D', 'W', 'D', 'V', 'Z', 'Z'].map((dayName, index) => (
              <div key={index}>{dayName}</div>
            ))}
            {days.map((day, index) => (
              <div
                className={this.today(day) ? 'today' : ''}
                key={index}
                style={{ gridColumn: this.column(index) }}
              >
                {day.format('D')}
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}
