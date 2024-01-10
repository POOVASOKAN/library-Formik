import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContext from './Context/Context.jsx'
import AuthorContextData from './Context/AuthorContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContext>
      <AuthorContextData>
        <App />
      </AuthorContextData>
    </AppContext>
  </BrowserRouter>
)
