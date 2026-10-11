
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import CartItem from '../CartItem'

const item = {
  id: 1,
  name: 'Wireless Headphones',
  price: 59.99,
  image: 'https://placehold.co/600x400',
  quantity: 2,
}

describe('CartItem', () => {
  it('displays the item name and quantity', () => {
    render(
      <CartItem item={item} removeFromCart={() => {}} />
    )

    expect(
      screen.getByText('Wireless Headphones')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Quantity: 2')
    ).toBeInTheDocument()

    expect(
      screen.getByText('$119.98')
    ).toBeInTheDocument()
  })

  it('displays a Remove button', () => {
    render(
      <CartItem item={item} removeFromCart={() => {}} />
    )

    expect(
      screen.getByRole('button', { name: 'Remove' })
    ).toBeInTheDocument()
  })

  it('calls removeFromCart with the item ID when clicked', () => {
    const removeFromCart = vi.fn()

    render(
      <CartItem item={item} removeFromCart={removeFromCart} />
    )

    fireEvent.click(
      screen.getByRole('button', { name: 'Remove' })
    )

    expect(removeFromCart).toHaveBeenCalledWith(1)
    expect(removeFromCart).toHaveBeenCalledTimes(1)
  })
})