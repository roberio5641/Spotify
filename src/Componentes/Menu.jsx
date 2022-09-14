
function Menu() {
    return(

        <div>
            <header>   
                <nav class="nav-bar">
                <Link to="/" class="navbar-brand">
                    <img id="logo" src="./img/Spotify2.png" alt="spotify"/>
                </Link>
                    
                <ul class="nav-list">
                    <li><Link to = "/login">Login</Link></li>
                    <li><Link to = "/Cadastro">Cadastrar</Link></li>
                    <li><Link to = "/Faq">FAQ</Link></li>
                </ul>
                </nav>
            </header>
        </div>


    );
}

export default Menu;