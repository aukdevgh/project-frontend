import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, expect, test } from 'vitest'

import MainPage from './MainPage'

describe('MainPage', () => {
  test('renders the Main Page with the correct heading', () => {
    render(<MainPage />)

    const headingElement = screen.getByText('Main Page')
    expect(headingElement).toBeInTheDocument()
  })
})
