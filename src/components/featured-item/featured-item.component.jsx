import star from '../../assets/star.png';

const FeaturedItem = ({ post, changeContent }) => {
    const { urlImage, title, rating } = post;
    return(
        <div className='featured__item' onClick={() => changeContent(post)}>
            <img
                src={urlImage}
                alt='img'
                className='featured__item--image'
            />
            <h3 className='featured__item--title'>{title}</h3>
            <div className='featured__item--rating'>
                <img src={star} alt='rating' className='featured__item--rating--image'/><span>{rating}</span>
            </div>
        </div>
    );
}
export default FeaturedItem;