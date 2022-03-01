import './Banner.css';


const Banner = ({title}) => {
    return(
        <div id='banner'>
            <div id='banner-logo'>
                <img  alt ='tournament-logo' src='https://static.wixstatic.com/media/39e9a7_a38d09d56ebe45e7ba1ba5afc3ca1f4a~mv2.png/v1/crop/x_0,y_186,w_3874,h_3502/fill/w_652,h_652,al_c,q_90,usm_0.66_1.00_0.01/Logo%20-%20Black%20Eagles%20Esports.webp' style={{maxHeight: '50%'}}/>
                <h1 className='h1-set'>{title}</h1>
CHA            </div>
        </div>
    )
}

export default Banner;