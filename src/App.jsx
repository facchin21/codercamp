import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./router/route"
import { Footer } from "./components/Footer"

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  )
}

export default App
