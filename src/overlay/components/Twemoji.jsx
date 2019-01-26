import twemoji from 'twemoji'
import { h, Component } from 'preact'

class Twemoji extends Component {
  componentDidMount() {
    this.parseTwemoji()
  }

  componentDidUpdate() {
    this.parseTwemoji()
  }

  parseTwemoji() {
    twemoji.parse(this.$node, { className: 'c-twemoji' })
  }

  render() {
    return (
      <span ref={(node) => { this.$node = node }}>
        {this.props.children}
      </span>
    )
  }
}

export default Twemoji
