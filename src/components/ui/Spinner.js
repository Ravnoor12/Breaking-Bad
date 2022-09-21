import React from 'react'
import spinner from '../../img/spinner.gif'

const Spinner = () => {
  return (
    <>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
      <p style={{margin:'auto',position:'relative',textAlign:'center'}}>Kindly wait, it won't take much time</p>
    </>
  )
}

export default Spinner
