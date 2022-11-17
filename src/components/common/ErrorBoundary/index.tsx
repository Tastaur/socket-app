import React, { Fragment } from 'react';
import { Typography } from '@mui/material';


export interface IProps {
  children: JSX.Element,
}

export interface State {
  hasError: boolean,
  errorMessage: string,
  stackTrace: string,
}

export class ErrorBoundary extends React.Component<IProps, State> {
  state = {
    hasError: false,
    errorMessage: '',
    stackTrace: '',
  };
  
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({
      hasError: true,
      errorMessage: error.message,
      stackTrace: info.componentStack.trim().split(/\r?\n/).map(str => str.trim()).join('\n'),
    });
  }
  
  renderError() {
    const { errorMessage, stackTrace } = this.state;
    return (
        <Fragment>
            <Typography>
                Something went wrong...
            </Typography>
            <Typography>
                {errorMessage}
            </Typography>
            <Typography>
                {stackTrace}
            </Typography>
        </Fragment>
    );
  }
  
  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    
    if (hasError) {
      return this.renderError();
    }
    
    return children;
  }

}
