import './intro.css'
import Picture from '../../img/output-onlinepngtools.png'
const intro = ()=>{
    return (
        <div className="i">
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-intro">
                        Hello, my name is</h2>
                        <h1 className="i-name">Abrham Muche</h1>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                            <div className="i-title-item">Front-end Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Backend Developer </div>
                            <div className="i-title-item">Penetration Tester</div>                                                               
                            <div className="i-title-item">Web Content Creator</div>
                    </div>
                        </div>
                        <div className="i-desc">
                        </div>

                        <blockquote class="sidekick">
                            Programming isn't about what you know; it's about what you can figure out.
                            <cite> Abrham M.</cite>
                        </blockquote>
                        
                        
                    </div>
                </div>
                <div className="i-right">
                    <div className="i-bg"></div>
                    <img src={Picture} alt="Abrham M" className="i-img"/>
                </div>
        </div>
    )
} 

export default intro

