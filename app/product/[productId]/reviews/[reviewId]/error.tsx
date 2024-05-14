'use client'
import React from 'react'
type ErrorTypes = {
  error: Error,
  reset: () => void
}
const ErrorBoundary = ({ error, reset }: ErrorTypes) => {
  return (
    <div>
      {error.message}
      <button onClick={()=>{reset}}>Try Again</button>
    </div>
  )
};

export default ErrorBoundary