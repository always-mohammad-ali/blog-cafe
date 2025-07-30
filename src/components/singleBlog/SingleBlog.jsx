import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const SingleBlog = ({blog, addToBookmark, handleReadingTime}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
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
                    <div><button onClick={ ()=>{addToBookmark(blog)}} className='text-red-500 text-2xl hover:text-black'><CiBookmark/></button></div>
                </div>
            </div>

            <h1 className="text-4xl font-bold mb-3">{title}</h1>
            <p className='text-gray-400'>
                {hashtags.map(hash => <span>{hash} </span>)}
            </p>

            <button className='text-blue-500 underline hover:text-black hover:font-bold' onClick={() =>{handleReadingTime(reading_time)}}>Mark as Read</button>


            
        </div>
    );
};

SingleBlog.propTypes= {
    blog: PropTypes.object
}


export default SingleBlog;