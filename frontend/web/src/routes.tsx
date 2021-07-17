import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home'
import EducatorsNew from './pages/educators/new'
import EducatorsIndex from './pages/educators/index'

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={EducatorsIndex} path="/educators" exact />
      <Route component={EducatorsNew} path="/educators/new" />
    </BrowserRouter>
  )
}

export default Routes
