import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    return (
        <div className='my-10 space-y-6'>
            <img className='w-full' src={blog.CoverPic} alt={`The title is ${blog.Title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
            <img className='w-14' src={blog.AuthorImage} alt="" />
            <div className='text-lg'>
                <h2>{blog.AuthorName}</h2>
                <h2>{blog.PostedDate}</h2>
            </div>
                </div>
                <div>
              <span>{blog.ReadingTimes} Min read</span>
                </div>
            </div>
            <h2 className='text-2xl font-semibold'>Blogs-Title:{blog.Title}</h2>
           <p>
            {
                blog.Hashtags.map((hash,id)=><span key={id}className='mr-4'>{hash}</span>)
            }
           </p>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;