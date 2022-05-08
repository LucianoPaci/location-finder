// Components

import Layout from '../components/Layout'
import ResultPage from '../pages/ResultPage'
import SearchPage from '../pages/SearchPage'

const routes = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/',
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
