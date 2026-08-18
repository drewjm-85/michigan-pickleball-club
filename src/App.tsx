import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tryouts from './pages/Tryouts'
import Exec from './pages/Exec'
import Results from './pages/Results'
import Sponsors from './pages/Sponsors'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tryouts" element={<Tryouts />} />
        <Route path="/exec" element={<Exec />} />
        <Route path="/results" element={<Results />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
