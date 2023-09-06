export function TwitterFollowCard ({userName = "JhonDoe", children, isFollowing}) {
const imageSrc = `https://unavatar.io/${userName}`
return (
<article className="tw-followCard">
<header  className="tw-followCard-header">
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
    <button className="tw-followCard-button">
        Seguir
    </button>
</aside>
</article>
)
}