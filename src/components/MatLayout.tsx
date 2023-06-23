import { Outlet, useNavigate } from 'react-router-dom'
import { ProjectName } from '../App'
function MatLayout() {
    const navigate = useNavigate()

    const gotoBoard = () => {
        navigate('/')
    }

    const goToScore = () => {
        navigate('/scores')
    }

    return (
        <>
                {/* Where the each page show up in the same layout */}
                <Outlet />
        </>
    )
}

export default MatLayout
