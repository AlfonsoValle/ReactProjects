
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"


export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className="App">
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="Valle_avs" >
                Alfonso 
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="midudev"  >
            Midu 
            </TwitterFollowCard >
            <TwitterFollowCard isFollowing userName="MoureDev">
            Moure 
            </TwitterFollowCard>

        </section>
    )
}
