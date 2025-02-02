import { FC, useState } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Button, Text } from '@shared/ui'

import cls from './LogoutButton.module.scss'
import { useLazyLogoutQuery } from '../../hooks'
import { useAuthActions } from '../../model/slice/authSlice'

interface LogoutButtonProps {
  className?: string
}

export const LogoutButton: FC<LogoutButtonProps> = ({ className }) => {
  const [logoutApi, { isFetching, error }] = useLazyLogoutQuery()
  const { setIsAuth } = useAuthActions()
  const [logoutError, setLogoutError] = useState<string | null>(null)

  const handleLogout = async () => {
    try {
      await logoutApi().unwrap()
      setIsAuth(false)
    } catch (err) {
      console.error('Logout error:', err)
      setLogoutError('Failed to logout. Please try again.')
    }
  }

  return (
    <div className={classNames(cls['logout-wrapper'], {}, [className])}>
      <Button onClick={handleLogout} disabled={isFetching}>
        {isFetching ? 'Logging out...' : 'Logout'}
      </Button>
      {logoutError && (
        <Text as="p" error>
          {logoutError}
        </Text>
      )}
      {error && (
        <Text as="p" error>
          Server error: {error.toString()}
        </Text>
      )}
    </div>
  )
}
