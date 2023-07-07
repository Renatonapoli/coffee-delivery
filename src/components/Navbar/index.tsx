import {ShoppingCart, Placeholder} from '@phosphor-icons/react'

export function Navbar () {
  return (
    <div>
      <img src="../src/assets/logo.svg" alt="Logo da página" />

      <div>
        <Placeholder />
        <span>Rio de Janeiro</span>
        <ShoppingCart />
      </div>

    </div>
  )
}