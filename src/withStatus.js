import React, { Fragment } from "react";
import { VIEW_STATUS } from "./constants";

const withStatus = (config = {}) => ComposedComponent => props => {
  const {
    loader: LoaderComponent,
    error: ErrorComponent,
    noData: NoDataComponent
  } = config;

  if (props.status === VIEW_STATUS.uninitialized && LoaderComponent)
    return <LoaderComponent {...props} />;

  if (props.status === VIEW_STATUS.crash && ErrorComponent)
    return <ErrorComponent {...props} />;

  if (Array.isArray(props.data) && props.data.length === 0 && NoDataComponent)
    return <NoDataComponent {...props} />;

  if (props.status === VIEW_STATUS.loading && LoaderComponent)
    return (
      <Fragment>
        <LoaderComponent {...props} />
        <ComposedComponent {...props} />
      </Fragment>
    );

  return <ComposedComponent {...props} />;
};

export default withStatus;
