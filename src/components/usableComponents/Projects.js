import '../../global.css'
import project1 from '../svg/project1.svg'
import project2 from '../svg/project2.svg'

const Projects = () => {
    return (
        <div className="pro">
            <div className="proheader">
                <span>[02] WORK</span>
                <h1 className='recent'>RECENT</h1>
                <h1 className='projects'>PROJECTS</h1>
            </div>

            <div className="progrid">
                <div className="probox">
                    <div className="proboxspan">
                        <h4>Using React With Framework</h4>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="brand">
                        <img src={project1} alt="" />
                    </div>
                    <div className="propanel">
                        <div className="propanelex">
                            <h4>Small project called <span>BREMIO</span></h4>
                            <div className="propanelexlink">
                                <a href="" title='behance'><i class="fa-brands fa-behance"></i></a>
                                <a href="" title='github'><i class="fa-brands fa-github"></i></a>
                                <a href="" title='visit documentation'><i class="fa-solid fa-share"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="probox">
                    <div className="proboxspan">
                        <h4>Using React With Framework</h4>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="brand">
                        <img src={project2} alt="" />
                    </div>
                    <div className="propanel">
                        <div className="propanelex">
                            <h4>Small project called <span>BREMIO</span></h4>
                            <div className="propanelexlink">
                                <a href="" title='behance'><i class="fa-brands fa-behance"></i></a>
                                <a href="" title='github'><i class="fa-brands fa-github"></i></a>
                                <a href="" title='view documentation'><i class="fa-solid fa-share" title='view documentation'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
