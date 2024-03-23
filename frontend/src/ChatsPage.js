import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage =(props) => {
    return(
        <div style={{height:'100vh'}}>
            <PrettyChatWindow
            projectId='0d6875d0-8267-4b56-a4a1-4a0a37ec3803'
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
            />
        </div>
    )
}

export default ChatsPage;