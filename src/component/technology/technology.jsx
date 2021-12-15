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
        <div className="card">
            <div className="card-browser">
                    <div className="card-browser-circle"></div>
                    <div className="card-browser-circle"></div>
                    <div className="card-browser-circle"></div>
            </div>
            <div className="card-img">
                <img src={props.name} alt={props.name} className="card-image"/>
            </div>
        </div>
    )
}


const Technology = ()=>{
    return (
        <div className="t">
                <div className="t-title">
                    <h2>Technologies</h2> 
                    <div className="my-technology">
                        <TechnologyCard name={Express}/>
                        <TechnologyCard name={Reacts}/>
                        <TechnologyCard name={Laravel} />
                    </div>
                    <div className="my-technology">
                        <TechnologyCard name={Html}/>
                        <TechnologyCard name={Mysql}/>
                        <TechnologyCard name={Mongodb}/>
                        <TechnologyCard name={Nodejs}/>
                    </div>
                </div>
        </div>
    )
}
export default Technology