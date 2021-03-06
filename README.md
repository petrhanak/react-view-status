# react-view-status

General error handling and data loading for fast prototyping, internal admin tool or simple email subscribtion where you don't need rocket science... because doing it right takes some time. 

## View lifecycle

`uninitialized`: No data to display, only loader will be present.

`default`: User interaction available, but there still might be error passed in default state. There is special case for empty array passed in `props.data` showing `<NoDataComponent />`.

`loading`: Data turned up in loading state while there is still previous state available to show, e.g. user is sending form, list is refreshing.

`finite`, `crash`: Data flow is finished with no more interaction available for user
successful sign up, filled form, component failed loading.

### How to use

First provide config for hoc, all components are optional.

```js
// status.js
import withStatus from 'react-view-lifecycle'

const Loader = props => <div>loading...</div>
const Error = props => <div>something bad happened</div>
const NoData = props => <div>no data to display</div>

export default withStatus({
  loader: MyLoader,
  error: Error,
  noData: NoData,
})
```

Then wrap component showing data with this hoc and pass `status`, `error` and `data` in props.

```js
import status from './status'

const MyComponent = props => (...)

export default status(MyComponent);
```

For better understanding run `npm start` in `/examples` folder
