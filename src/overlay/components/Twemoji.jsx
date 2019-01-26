import twemoji from 'twemoji'
import { h, Component } from 'preact'

class Twemoji extends Component {
  componentDidMount() {
    this.parseTwemoji()
  }

  shouldComponentUpdate(nextProps) {
    const {
      children,
    } = this.props

    return children !== nextProps.children
  }

  componentDidUpdate() {
    this.parseTwemoji()
  }

  parseTwemoji() {
    twemoji.parse(this.$node, { className: 'c-twemoji' })
  }

  render() {
    const {
      children,
    } = this.props

    return (
      <span ref={(node) => { this.$node = node }}>
        {children}
      </span>
    )
  }
}

export default Twemoji
