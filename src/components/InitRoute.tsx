import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import IndexPage from './IndexPage/IndexPage'
import BoardPage from './BoardPage'
import MatLayout from './MatLayout'
import ScorePage from './ScorePage/ScorePage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MatLayout />,
        children: [
            {
                path: '/',

                element: <IndexPage />,
            },
            {
                path: 'board',
                element: <BoardPage />,
            },
            {
                path: 'scores',
                element: <ScorePage />,
            },
        ],
    },
])

function InitRoute() {
    return <RouterProvider router={router} />
}

export default InitRoute
