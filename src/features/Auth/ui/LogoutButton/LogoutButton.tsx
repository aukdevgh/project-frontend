import { FC, useState } from 'react'

import { Button, Text } from '@shared/ui'

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
    <div className={className}>
      <Button onClick={handleLogout} disabled={isFetching}>
        {isFetching ? 'Logging out...' : 'Logout'}
      </Button>
      {logoutError && <Text className="text-red-500">{logoutError}</Text>}
      {error && <Text className="text-red-500">Server error: {error.toString()}</Text>}
    </div>
  )
}
