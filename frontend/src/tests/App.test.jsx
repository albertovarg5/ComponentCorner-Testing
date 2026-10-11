
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from '../App'

const savedItem = {
  id: 1,
  name: 'Wireless Headphones',
  price: 59.99,
  image: 'https://placehold.co/600x400',
  description: 'Enjoy high-quality sound.',
  quantity: 2,
}

describe('App cart management', () => {
  beforeEach(() => {
    localStorage.clear()
    window.history.pushState({}, '', '/')
  })

  it('renders the homepage', () => {
    render(<App />)
    expect(screen.getByText('Upgrade Your Tech')).toBeInTheDocument()
  })

  it('loads cart data from localStorage', () => {
    localStorage.setItem('componentCornerCart', JSON.stringify([savedItem]))
    window.history.pushState({}, '', '/cart')

    render(<App />)

    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument()
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument()
  })

  it('saves cart changes to localStorage', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')

    render(<App />)

    fireEvent.click(screen.getByRole('link', { name: /view products/i }))

    const addButtons = await screen.findAllByRole('button', {
      name: /add to cart/i,
    })

    fireEvent.click(addButtons[0])

    await waitFor(() => {
      const savedCart = JSON.parse(
        localStorage.getItem('componentCornerCart')
      )

      expect(savedCart).toHaveLength(1)
      expect(savedCart[0].name).toBe('Wireless Headphones')
      expect(savedCart[0].quantity).toBe(1)
      expect(setItemSpy).toHaveBeenCalled()
    })

    setItemSpy.mockRestore()
  })
})