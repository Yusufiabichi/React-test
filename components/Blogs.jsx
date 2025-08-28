
const Blogs = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return (
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div>
                    <h2>{blog.title}</h2>
                    <p>Written by. {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default Blogs