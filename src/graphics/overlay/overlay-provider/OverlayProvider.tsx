import { createTwitchieStore } from 'nodecg-twitchie-graphics'
import { FunctionComponent, h } from 'preact'
import { Provider } from 'react-redux'
import { Middleware, Reducer, Store } from 'redux'

import notificationMiddleware from './middleware/notifications'

import './xsplit-api'

interface DefaultOverlayProviderProps {
  reducers?: Reducer
  callback?: (store: Store) => void
  middleware?: Middleware[]
}

const OverlayProvider: FunctionComponent<DefaultOverlayProviderProps> = ({
  reducers,
  callback,
  middleware,
  children,
}) => {
  const composedMiddleware = middleware ? [notificationMiddleware, middleware] : [notificationMiddleware]
  const store = createTwitchieStore(reducers, composedMiddleware as any)

  if (callback) {
    callback(store)
  }

  return <Provider store={store}>{children}</Provider>
}

export default OverlayProvider
