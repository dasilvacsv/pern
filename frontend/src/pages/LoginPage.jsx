import React from 'react'
import {Card, Button, Input, Label} from './../components/ui'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function LoginPage() {
  const { register, handleSubmit} = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='h-[calc(100vh-64px)] flex justify-center items-center'>
      <Card>
        <h1 className='text-4xl font-bold my-2 text-center'>Login</h1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">
            Email
          </Label>
          <Input type='email' placeholder='Email'
          {...register('email',{
            required: true
          })}/>
          <Label htmlFor="password">
            Password
          </Label>
          <Input type='password' placeholder='Password'
          {...register('password',{
            required: true
          })}
          />
          <Button>
            Sign In
          </Button>
          <div className='flex justify-between my-4'>
            <p>Don't have an acount? <Link to='/register' className='font-bold'>Register</Link></p>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default LoginPage