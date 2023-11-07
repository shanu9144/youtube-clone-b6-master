import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className='SignIn'>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="signin-actions">
                <Link to={'/'}>
                    <button class="signin-action-buttons btn btn-secondary">Back</button>
                </Link>
                <button type="submit" class="signin-action-buttons btn btn-primary">Submit</button>
            </div>
            
        </form>
      
    </div>
  )
}

export default SignIn
