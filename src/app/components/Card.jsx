export default function Card({title, description, fullname}){
    return(
        <div id="card">
            <div id="title-side">
                <strong>{title}</strong>
            </div>
            <div id="desc-side">
                <p>{description}</p>
            </div>
            <div id="name-side">
                <p id="author">{fullname}</p>
            </div>
        </div>
    )
}