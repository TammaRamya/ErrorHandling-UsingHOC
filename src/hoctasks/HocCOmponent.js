import React from'react'
export default function withErrorHandler (Fallback,Component) {
    class WithErrorHandler extends React.Component {
      constructor () {
        super()
        this.state = {
          hasError: false,
          error: null,
          errorInfo: null
        }
      }
  
      componentDidCatch (error, info) {
        this.setState({ hasError: true, error, errorInfo: info })
      }
  
      render () {
        // if state contains error we render fallback component
        if (this.state.hasError) {
          return (
            <Fallback/>
          )
        }
  
        return <Component {...this.props} />
      }
    }
    return WithErrorHandler
  }
