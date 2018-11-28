export const VIEW_STATUS = {
  // no data to display, only loader should be present
  uninitialized: "uninitialized",
  // user interaction available
  // note: there still might be error passed in default state
  default: "default",
  // data turned up in loading state while there is still previous state available to show
  // e.g. user is sending form, list is refreshing
  loading: "loading",
  // data flow is finished with no more interaction available for user
  // e.g. successful sign up, filled form, component failed loading
  finite: "finite",
  crash: "crash"
};
