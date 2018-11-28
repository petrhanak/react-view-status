import MyComponent from "../src/MyComponent";
import { VIEW_STATUS } from "react-view-status";

export default () => (
  <div>
    <h1>no props</h1>
    <MyComponent />

    <h1>uninitialized component</h1>
    <MyComponent status={VIEW_STATUS.uninitialized}/>

    <h1>default state</h1>
    <MyComponent status={VIEW_STATUS.default}/>

    <h1>loading state</h1>
    <MyComponent status={VIEW_STATUS.loading}/>

    <h1>non-critical state</h1>
    <MyComponent status={VIEW_STATUS.default} error="Something happened" />

    <h1>empty data</h1>
    <MyComponent status={VIEW_STATUS.default} data={[]} />

    <h1>finite state</h1>
    <MyComponent status={VIEW_STATUS.finite}/>

    <h1>critical error state</h1>
    <MyComponent status={VIEW_STATUS.crash}/>
  </div>
)
