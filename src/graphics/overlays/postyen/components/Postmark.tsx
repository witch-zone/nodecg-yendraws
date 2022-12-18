import { FunctionComponent, h } from 'preact'

import { Layer } from '../../../components/Scene'

import postmark from '../../../assets/images/postyen/postmark.png'
import circleG from '../../../assets/images/postyen/circle-g.png'
import circleD from '../../../assets/images/postyen/circle-d.png'
import circleT from '../../../assets/images/postyen/circle-t.png'
import circleName from '../../../assets/images/postyen/circle-name.png'

const Postmark: FunctionComponent = () => (
  <div className="c-postmark c-postmark--digital">
    <Layer>
      <img src={postmark} />
    </Layer>

    <Layer className="c-postmark-stamp c-postmark-stamp--games">
      <img src={circleG} />
    </Layer>

    <Layer className="c-postmark-stamp c-postmark-stamp--digital">
      <img src={circleD} />
    </Layer>

    <Layer className="c-postmark-stamp c-postmark-stamp--traditional">
      <img src={circleT} />
    </Layer>

    <Layer>
      <img className="c-envelope__name" src={circleName} />
    </Layer>
  </div>
)

export default Postmark
