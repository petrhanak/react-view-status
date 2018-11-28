import { withStatus } from 'react-view-status'

const MyLoader = props => <div>loading...</div>
const Crash = props => <div>Error occured: {props.error || 'Unknown error'}</div>
const NoData = props => <div>no data to display</div>

const status = withStatus({
  loader: MyLoader,
  error: Crash,
  noData: NoData,
})

export default status
