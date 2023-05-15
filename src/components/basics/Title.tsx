interface TitleProperties {
    image: string
    text: string
    subTitle?: string
}

export const Title = ({image, text, subTitle}: TitleProperties) => (
    <div className="title">
        <img className="title-img" src={image} alt={text}/>
        <h1 className="title-text">{text}</h1>
        {subTitle && <h2 className="title-subtext">- {subTitle}</h2>}
    </div>
)