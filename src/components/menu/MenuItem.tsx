export interface MenuItemProperties {
    img: string
    text: string
}

export function MenuItem({img, text} :MenuItemProperties) {
    let defaultImgClassName = "menu-item-"
    const fileExtension = img.split('/').reverse()[0].split('.').pop()

    if (fileExtension === "jpg" || fileExtension === "png" ) {
        defaultImgClassName += "img"
    } else if(fileExtension === "svg") {
        defaultImgClassName += fileExtension
    }

    return (
        <div className="menu-item">
            <div className="menu-item-content">
                <img className={defaultImgClassName} src={img} alt={text + " logo"}/>
                <span className="menu-item-text">{text}</span>
            </div>
        </div>
    )
}