import {Route, Routes} from 'react-router-dom'

import { Home } from './pages/Home'
import { Payment } from './pages/Payment'
import { ConfirmedOrder } from './pages/ConfirmedOrder'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pagamento' element={<Payment />} />
      <Route path='/pedido-confirmado' element={<ConfirmedOrder />} />
    </Routes>
  )
}