import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CartProvider } from './context/ProductCartContext'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <GlobalStyle />
      </CartProvider>
    </ThemeProvider>
  )
}
