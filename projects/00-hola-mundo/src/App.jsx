
import { useState } from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"


export function App() {

    const [name, setName] = useState ("Valle_avs")
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className="App">
            <TwitterFollowCard formatUserName={formatUserName} userName={name} >
                Alfonso 
            </TwitterFollowCard>
            <TwitterFollowCard  userName= "midudev" >
            Midu 
            </TwitterFollowCard >
            <TwitterFollowCard  userName="MoureDev">
            Moure 
            </TwitterFollowCard>

<button onClick={() => setName ("Elon_Musk")}>
Cambiar Nombre
</button>
        </section>
    )
}
