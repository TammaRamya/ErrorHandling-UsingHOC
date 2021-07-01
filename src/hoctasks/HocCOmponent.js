import React from'react'
export default function withErrorHandler (Fallback,Component) {
    class WithErrorHandler extends React.Component {
      constructor () {
        super()
    
        // Construct the initial state
        this.state = {
          hasError: false,
          error: null,
          errorInfo: null
        }
      }
  
      componentDidCatch (error, info) {
        // Update state if error happens
        this.setState({ hasError: true, error, errorInfo: info })
      }
  
      render () {
        // if state contains error we render fallback component
        if (this.state.hasError) {
          //const { error, errorInfo } = this.state
          return (
            <Fallback/>
          )
        }
  
        return <Component {...this.props} />
      }
    }
    return WithErrorHandler
  }
