import SingleBookmark from "../singleBookmark/SingleBookmark";


const Bookmark = ({bookMark, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 p-3 rounded-xl">
            <h3 className="text-center text-xl font-bold text-gray-500">Total Spend Time on read: {readingTime}</h3>
            <p className="text-xl font-bold text-center my-3 text-gray-500">Read:{bookMark.length}</p>
            {
                bookMark.map(bookmark => <SingleBookmark bookmark={bookmark} readingTime={readingTime}></SingleBookmark>)
            }
        </div>
    );
};

export default Bookmark;