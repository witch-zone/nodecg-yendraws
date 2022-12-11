import { Fragment, h } from 'preact'

import { Layer } from '../../../components/Scene'

import postmark from '../../../assets/images/postyen/postmark.png'
import circleG from '../../../assets/images/postyen/circle-g.png'
import circleD from '../../../assets/images/postyen/circle-d.png'
import circleT from '../../../assets/images/postyen/circle-t.png'
import circleName from '../../../assets/images/postyen/circle-name.png'

const Envelope = () => (
  <Fragment>
    <Layer>
      <img src={postmark} />
    </Layer>

    <Layer>
      <img src={circleG} />
    </Layer>

    <Layer>
      <img src={circleD} />
    </Layer>

    <Layer>
      <img src={circleT} />
    </Layer>

    <Layer>
      <img className="c-envelope__name" src={circleName} />
    </Layer>
  </Fragment>
)

export default Envelope
