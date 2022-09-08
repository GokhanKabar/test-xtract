import React from 'react'

const Backdrop = ({handleClose, children}) => {
  return (
    <div onClick={handleClose} className='backdrop'>
        {children}
    </div>
  )
}

export default Backdrop