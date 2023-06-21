import DisplayBoard from './DisplayBoard';
import InitBoard from './InitBoard'

function BoardPage() {
    const board =  <InitBoard />

    // const brick =  <InitBrick />
    return <DisplayBoard board={board}/>;
}

export default BoardPage

