import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router'
import * as z from 'zod'

import { classNames } from '@shared/lib/classNames'
import { Button, Headling, Input, Text } from '@shared/ui'

import cls from './AuthForm.module.scss'
import { useLoginMutation, useRegisterMutation } from '../../api/authApi'
import { useAuthActions } from '../../model/slice/authSlice'
import { AuthLoginData, AuthRegisterData } from '../../model/types/authSchema'

interface AuthFormProps {
  className?: string
}

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const AuthForm: FC<AuthFormProps> = ({ className }) => {
  const [isRegister, setIsRegister] = useState(true)
  const [login, { isLoading: isLoginLoading, error: loginError }] = useLoginMutation()
  const [registerUser, { isLoading: isRegisterLoading, error: registerError }] = useRegisterMutation()
  const { setIsAuth } = useAuthActions()

  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string })?.from || '/'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthRegisterData | AuthLoginData>({
    resolver: zodResolver(isRegister ? registerSchema : loginSchema),
  })

  const onSubmit = async (data: AuthRegisterData | AuthLoginData) => {
    try {
      if (isRegister) {
        await registerUser(data as AuthRegisterData).unwrap()
      } else {
        await login(data as AuthLoginData).unwrap()
      }
      setIsAuth(true)
      navigate(from, { replace: true })
    } catch (error) {
      console.error('Auth error:', error)
    }
  }

  return (
    <div className={classNames(cls['auth-form-wrapper'], {}, [className])}>
      <Headling>{isRegister ? 'Register' : 'Login'}</Headling>
      <div className={cls.content}>
        <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
          {isRegister && (
            <div className={cls.field}>
              <Input placeholder="Name" {...register('name')} />
              {errors && (
                <Text as="p" error>
                  {errors.name?.message}
                </Text>
              )}
            </div>
          )}
          <div className={cls.field}>
            <Input placeholder="Email" {...register('email')} autoComplete="username" />
            {errors.email && (
              <Text as="p" error>
                {errors.email.message}
              </Text>
            )}
          </div>
          <div className={cls.field}>
            <Input type="password" placeholder="Password" {...register('password')} autoComplete="current-password" />
            {errors.password && (
              <Text as="p" error>
                {errors.password.message}
              </Text>
            )}
          </div>
          <Button
            type="submit"
            disabled={isRegisterLoading || isLoginLoading}
            loading={isRegisterLoading || isLoginLoading}
          >
            {isRegister ? 'Sign Up' : 'Sign In'}
          </Button>
        </form>

        {(loginError || registerError) && (
          <Text as="p" error>
            Invalid credentials
          </Text>
        )}

        <Button variant="secondary" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </Button>
      </div>
    </div>
  )
}
