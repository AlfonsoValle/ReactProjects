import { useState } from "react"

export function TwitterFollowCard({ userName = "JhonDoe", children }) {

const [isFollowing, setIsFollowing] = useState(false)
// isFollowing es el que investiga cómo está ahora mismo (luz apagada o encendida? y el setIsFollowing es el interruptor)

const handleClick = () => {
    setIsFollowing (!isFollowing)
}

//Pilla como esté el interruptor y dale al otro lado. Ahora ponemos esta función en el botón.
//Son estados internos, separados para cada elemento, darle a seguir a uno no implica que sigas a otro. 


    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing
        ? "tw-followCard-button is-following"
        : "tw-followCard-button"

        
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    alt="La imagen de Avatar"
                    src={imageSrc}
                    className="tw-followCard-avatar"
                />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName"> @{userName} </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick = {handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}