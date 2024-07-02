import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <img src="./logo-brebajes-del-sur.png
                    " alt="Brebajes del Sur"/>
                </div>
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-black fs-4" href="#">Vinos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black fs-4" href="#">Whiskies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black fs-4" href="#">Aperitivos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black fs-4" href="#">Licores</a>
                        </li>
                    </ul>
                </div>
                <div className="col text-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar