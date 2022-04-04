// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {
    isSubscribed: true,
  }

  subscribeStatusChange = () => {
    this.setState(prevStat => ({
      isSubscribed: !prevStat.isSubscribed,
    }))
  }

  render() {
    let subscribeStatus
    const {isSubscribed} = this.state
    if (isSubscribed === false) {
      subscribeStatus = 'Subscribed'
    } else {
      subscribeStatus = 'Subscribe'
    }
    return (
      <div className="bg">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          type="button"
          onClick={this.subscribeStatusChange}
          className="button"
        >
          {subscribeStatus}
        </button>
      </div>
    )
  }
}

export default Welcome
