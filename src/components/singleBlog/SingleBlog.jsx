import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const SingleBlog = ({blog, addToBookmark}) => {
    const {title, cover, id, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`title of the img {title}`} />

            <div className='flex justify-between my-6'>
                <div className='flex gap-4 items-center'>
                    <div>
                        <img className='w-12' src={author_img} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p className='text-gray-400'>{posted_date}</p>
                    </div>
                </div>

                <div className='flex gap-3 items-center text-gray-600'>
                    <div>{reading_time} min read</div>
                    <div><button onClick={addToBookmark}><CiBookmark/></button></div>
                </div>
            </div>

            <h1 className="text-4xl font-bold mb-3">{title}</h1>
            <p className='text-gray-400'>
                {hashtags.map(hash => <span>{hash} </span>)}
            </p>

            <button><a href="">Mark as Read</a></button>


            
        </div>
    );
};

SingleBlog.propTypes= {
    blog: PropTypes.object
}


export default SingleBlog;