import star from '../../assets/star.png';
import apple from '../../assets/apple.png';
import android from '../../assets/android.png';

const Item =  ({ post, changeContent }) => {
    const { urlImage, author, title, rating, paragraph } = post;
    return(
        <div className='apps__main__item' onClick={() => changeContent(post)}>
            <img
                src={urlImage}
                alt='item'
                className='apps__main__item--image'
            />

            <div className='apps__main__item--details'>
                <div className='apps__main__item--details--author'>Author: <span className='apps__main__item--details--author--blue'>{author}</span></div>
                <div className='apps__main__item--details--info'>
                    <div className='apps__main__item--details--info--title'>{title}</div>
                    <div className='featured__item--rating'>
                        <img src={star} alt='rating' className='featured__item--rating--image'/><span>{rating}</span>
                    </div>
                </div>
                <div className='apps__main__item--details--paragraph'>{paragraph}</div>
            </div>

            <div className='apps__main__item--icons'>
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
        </div>
    );
}
export default Item;