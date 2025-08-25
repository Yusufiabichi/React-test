import { useState } from "react";

const List = ()=> {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem Ipsum', author: 'Yusufia', id: 1 },
        {title: 'Welcoming Party', body: 'Lorem Ipsum', author: 'Isah', id: 2 },
        {title: 'Web Development tips', body: 'Lorem Ipsum', author: 'Haydar', id: 3 },
    ])
    return(
        <div>
            {blogs.map((blog) => (
                <div>
                    <h2>{blog.title}</h2>
                    <p>Written by. {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default List