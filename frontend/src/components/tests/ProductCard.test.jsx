
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductCard from '../ProductCard'

const product = {
  id: 1,
  name: 'Wireless Headphones',
  price: 59.99,
  image: 'https://placehold.co/600x400',
  description: 'Enjoy high-quality sound.',
}

describe('ProductCard', () => {
  it('renders product information', () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} addToCart={() => {}} />
      </MemoryRouter>
    )

    expect(
      screen.getByText('Wireless Headphones')
    ).toBeInTheDocument()

    expect(
      screen.getByText('$59.99')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Enjoy high-quality sound.')
    ).toBeInTheDocument()
  })

  it('displays the Add to Cart button', () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} addToCart={() => {}} />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('button', { name: 'Add to Cart' })
    ).toBeInTheDocument()
  })

  it('calls addToCart when the button is clicked', () => {
    const addToCart = vi.fn()

    render(
      <MemoryRouter>
        <ProductCard product={product} addToCart={addToCart} />
      </MemoryRouter>
    )

    fireEvent.click(
      screen.getByRole('button', { name: 'Add to Cart' })
    )

    expect(addToCart).toHaveBeenCalledWith(product)
    expect(addToCart).toHaveBeenCalledTimes(1)
  })
})