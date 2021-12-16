import './technology.css'
import Express from '../../img/express.png'
import Reacts from '../../img/react.png'
import Laravel from '../../img/laravel.png'
import Html from '../../img/html5andcss3.png'
import Mongodb from '../../img/mongodb.png'
import Mysql from '../../img/mysql.png'
import Nodejs from '../../img/nodejs.jpg'

const TechnologyCard = (props) => {

    return(
        <div className="tech-card">
            <div className="tech-card-browser">
                    <div className="card-browser-circle"></div>
                    <div className="card-browser-circle"></div>
                    <div className="card-browser-circle"></div>
            </div>
            <div className="tech-card-img">
                <img src={props.name} alt={props.name} className="tech-card-image"/>
            </div>
        </div>
    )
}


const Technology = ()=>{
    return (
        <div className="tech">
                <div className="tech-title">
                    <h2>My Best Technologies</h2>
                    
                <div className="card-wrapper">
                    <div className="my-technology my-technology-left">
                        <TechnologyCard name={Express}/>
                        <TechnologyCard name={Reacts}/>
                        <TechnologyCard name={Laravel} />
                    </div>
                    <div className="my-technology my-technology-right">
                        <TechnologyCard name={Html}/>
                        <TechnologyCard name={Mysql}/>
                        <TechnologyCard name={Mongodb}/>
                        <TechnologyCard name={Nodejs}/>
                    </div>
                    </div>
                </div>
        </div>
    )
}
export default Technology