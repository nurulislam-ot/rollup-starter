import React, { forwardRef } from 'react'

const Box = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return <div {...props} ref={ref} />
  }
)

export default Box
