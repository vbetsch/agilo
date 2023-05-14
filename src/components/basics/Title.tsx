interface TitleProperties {
    image: string
    text: string
}

export const Title = ({image, text}: TitleProperties) => (
    <div className="title">
        <img className="title-img" src={image} alt={image}/>
        <h1 className="title-text">{text}</h1>
    </div>
)