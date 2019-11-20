import React from 'react';
import Countdown from './Countdown';

import {
    withRouter
} from "react-router-dom";

class PostApply extends React.Component {

  render() {
    if (this.props.location.state) {
      var dateToCountdown = this.props.location.state;
      console.log('got date', dateToCountdown);
      dateToCountdown.setHours(dateToCountdown.getHours(),dateToCountdown.getMinutes()+1,dateToCountdown.getSeconds(),0);
      console.log(dateToCountdown);
    }
    return (
    <div>
      <h1 className="text-white text-uppercase text-center my-4">Вы успешно подали заявку!</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3 custom1">
            <h1 style={{'font-size': '15pt'}}>В течение минуты с Вами свяжется оператор</h1>
              <Countdown date={dateToCountdown}/>
          </div>
        </div>
      </div>
    </div>
  )
  }
}

export default withRouter(PostApply);
