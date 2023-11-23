import React, { useRef, useEffect } from 'react'

export default function LogIn() {
    const UsernamrRef = useRef();

    useEffect(() => {
        UsernamrRef.current.focus()
    })
  return (
    <div className='login'>
        <h1>Login</h1>
        <form method='post'>
            <input  ref={UsernamrRef} type='text' name='u' placeholder='Username' required='required' />
            <input type='password' name='p' placeholder='Password' required='required' />
            <button type='submit' className='btn btn-primary btn-block btn-large'>Let me in.</button>
        </form>
    </div>
  )
}
