import {MenuItem, MenuItemProperties} from "./MenuItem";

interface MenuProperties {
    items: Array<MenuItemProperties>
}

export function Menu({items} :MenuProperties) {
  return (
    <aside className="menu">
        <div className="menu-content">
            <img className="menu-content-logo" src="/img/logo.png" alt="logo" />
        </div>
        <div className="menu-items">
            {items.map((item) => (
                <MenuItem img={item.img} text={item.text}/>
            ))}
        </div>
    </aside>
  );
}