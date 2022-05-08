// Components

import Layout from '../components/Layout'
import ResultPage from '../pages/ResultPage'
import SearchPage from '../pages/SearchPage'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/result',
        element: <ResultPage />,
      },
      { path: '*', element: <h2>Not Found</h2> },
    ],
  },
]
export default routes
