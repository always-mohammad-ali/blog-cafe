import React from 'react';

const SingleBookmark = ({bookmark}) => {
    
    const {title} = bookmark;
    return (
        <div>
            
            <h3 className='text-2xl bg-slate-300 m-5 p-5 rounded-xl hover:bg-white'>{title}</h3>
        </div>
    );
};

export default SingleBookmark;