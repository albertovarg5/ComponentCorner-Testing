
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HomePage from '../Homepage'

describe('HomePage', () => {
  it('renders the homepage heading', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )

    expect(screen.getByText('Upgrade Your Tech')).toBeInTheDocument()
  })

  it('displays the shopping information', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )

    expect(screen.getByText('Why Shop With Us?')).toBeInTheDocument()
  })
})