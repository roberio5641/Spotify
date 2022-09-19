import './Menu.jsx';
import styles from './Home.modules.css'


function Home() {
    return(
     
        <>

        <div className="App">
         
      <div className="wrapper">

<nav id="sidebar">

    <ul className="list-unstyled components">
        <li><a href="#">Início</a></li>
        <li><a href="#">Buscar</a></li>
        <li><a href="#">Sua Biblioteca</a></li>
        <p></p>
        <li><a href="#">Nova Playlist</a></li>
        <li><a href="#">Músicas curtidas</a></li>
    </ul>
</nav>

<div className="tabela">
    <table>
        <thead>
            <tr>
                <td>Metal</td>
                <td>Reggae</td>
                <td>Pop</td>
                <td>K-pop</td>
                <td>Rock</td>
            </tr>


        </thead>
        <tbody>
            <tr>
                <td>
                    <h3>Iron maiden</h3>
                    <img src="img/Fear_of_the_dark.jpg"/>
                    <p>Fear of the dark</p>
                </td>
                <td>
                    <h3>Bob Marley</h3>
                    <img src="img/is this love.jpg"/>
                    <p>Is this Love</p>
                </td>
                    
                <td>
                    <h3>Beyoncé</h3>
                    <img src="img/Beyonce.jpg"/>
                    <p>Lemonade</p>
                </td>
                <td>
                    <h3>BTS</h3>
                    <img src="img/BTS.jpg"/>
                    <p>Love Yourself</p>
                </td>
                <td>
                    <h3>Pink Floyd</h3>
                    <img src="img/pink-floyd-the-wall.jpg"/>
                    <p>The Wall</p>
                </td>
                    
            </tr>
            <tr>
                <td>
                    <h3>Metallica</h3>
                    <img src="img/Metallica.jpg"/>
                    <p>Master of Puppets</p>
                </td>
                <td>
                    <h3>Natiruts</h3>
                    <img src="img/Natiruts.jpg"/>
                    <p>Reggae Power</p>
                </td>
                <td>
                    <h3>Adele</h3>
                    <img src="img/Adele.jpg"/>
                    <p>21</p>
                </td>
                <td>
                    <h3>Black Pink</h3>
                    <img src="img/Blackpink_-_The_Album.png"/>
                    <p>The Album</p>
                </td>
                <td>
                    <h3>Queen</h3>
                    <img src="img/Queen_II.jpg"/>
                    <p>Queen II</p>
                </td>
            </tr>
        </tbody>

    </table>
</div>
</div>

    </div>
    </>
    )
    
   
}

export default Home;