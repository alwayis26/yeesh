import '../../global.css'
import peace from '../svg/peace.svg'
import Projects from '../usableComponents/Projects'

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="ho">
                <div className="hoheader">
                    <img src={peace} alt="" />
                    <h1>CREATE</h1>
                    <h1>IMMERSIVE</h1>
                    <h1>INTERFACE</h1>
                </div>
                <div className="hoparagraph">
                    <span>[01] ABOUT</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit reprehenderit sit, laudantium nihil et perspiciatis blanditiis sed natus at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis inventore velit dolorum placeat corrupti voluptate minus maxime eaque soluta reprehenderit!</p>
                </div>
            </div>

            <Projects/>
        </div>
    )
}

export default HomePage
