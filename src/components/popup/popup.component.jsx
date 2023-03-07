import apple from '../../assets/apple.png';
import android from '../../assets/android.png';
import star from '../../assets/star.png';
import downloadP from '../../assets/download.png';


import './popup.styles.scss';


const Popup =({ popup, Close }) => {
    const { urlImage, rating, download, author, title, paragraph, Link_Download, Link_LoadingPage } = popup;

    // eslint-disable-next-line no-unused-vars
    function CPABuildComplete(){
        window.open(Link_Download, "_blank");
        console.log("thank you!");
    }

    const locker = () => {
        // eslint-disable-next-line no-undef
        CPABuildLock();
    }

    return (
        <div className="apps__popup" onClick={Close}>
            <div className="apps__popup__body">
                <p className="apps__popup__exit" onClick={Close}>X</p>

                <div className="apps__popup__details">
                        <img
                            src={urlImage}
                            alt='item'
                            className='apps__popup__details--image'
                        />

                        <div className="apps__popup__details--icons">
                            <div className="apps__popup__details--icons-1 apps__popup__details--icons-right">
                                <img
                                    src={apple}
                                    alt='item'
                                    className='apps__main__item--icons-apple'
                                />
                                <img
                                    src={android}
                                    alt='item'
                                    className='apps__main__item--icons-android'
                                />
                            </div>

                            <div className='featured__item--rating apps__popup__details--icons-right'>
                                <img src={star} alt='rating' className='featured__item--rating--image'/><span>{rating}</span>
                            </div>

                            <div className="apps__popup__details--icons-2 apps__popup__details--icons-right">
                                <img
                                    src={downloadP}
                                    alt='item'
                                    className='apps__popup__details--icons-2-img'
                                />
                                <p className="apps__popup__details--icons-2-down">{download}+</p>
                            </div>
                        </div>

                        <div className='apps__popup__details__detail'>
                            <div className='apps__popup__details__detail--author'>Author: <span className='apps__main__item--details--author--blue'>{author}</span></div>
                            <div className='apps__popup__details__detail--title'>{title}</div>
                            <div className='apps__popup__details__detail--paragraph'>{paragraph}</div>
                        </div>

                    <div className='apps__popup__details--download'>
                        <h1 className='apps__popup__details--download--heading'>Download ready</h1>
                        <p className='apps__popup__details--download--paragraph'>Click the buttons below in order to get your coins or start with your app download</p>
                        <p className='apps__popup__details--download--link' onClick={()=> { window.open(Link_LoadingPage, "_blank"); }}>GET YOUR COINS</p>
                        <p className='secondary' onClick={locker}>DOWNLOAD NOW</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Popup;