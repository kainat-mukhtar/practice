import profilePic from './assets/images.jpg'

function Card(){

    return(
        <div className='card'>
            <img src={profilePic} alt="Profile Picture" style={{ borderRadius: '50%' }} className="card-image"></img>
            <h1 className="card-title">Bro Card</h1>
            <p className="card-text">I love coding</p>
        </div>
    );
}

export default Card