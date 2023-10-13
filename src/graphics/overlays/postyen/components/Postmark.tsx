import { FunctionComponent, h } from 'preact'
import classnames from 'classnames'

import Layer from '../../../components/Layer'

import usePostyenStore from '../store'

import classes from './Postmark.module.scss'

import postmark from '../assets/postmark.png'
import circleG from '../assets/circle-g.png'
import circleD from '../assets/circle-d.png'
import circleT from '../assets/circle-t.png'
import circleName from '../assets/circle-name.png'

const Postmark: FunctionComponent = () => {
  const mode = usePostyenStore((state) => state.mode)

  return (
    <div className={classes.Postmark}>
      <Layer>
        <img src={postmark} />
      </Layer>

      <Layer
        className={classnames(classes.Postmark__Stamp, {
          [classes['Postmark__Stamp--visible']]: mode === 'games',
        })}
      >
        <img src={circleG} />
      </Layer>

      <Layer
        className={classnames(classes.Postmark__Stamp, {
          [classes['Postmark__Stamp--visible']]: mode === 'digital',
        })}
      >
        <img src={circleD} />
      </Layer>

      <Layer
        className={classnames(classes.Postmark__Stamp, {
          [classes['Postmark__Stamp--visible']]: mode === 'traditional',
        })}
      >
        <img src={circleT} />
      </Layer>

      <Layer>
        <img className={classes.Postmark__Name} src={circleName} />
      </Layer>
    </div>
  )
}

export default Postmark
