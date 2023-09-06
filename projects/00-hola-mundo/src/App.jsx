
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"


export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className="App">
            <TwitterFollowCard formatUserName={formatUserName} userName="Valle_avs" >
                Alfonso 
            </TwitterFollowCard>
            <TwitterFollowCard  userName="midudev"  >
            Midu 
            </TwitterFollowCard >
            <TwitterFollowCard  userName="MoureDev">
            Moure 
            </TwitterFollowCard>

        </section>
    )
}
