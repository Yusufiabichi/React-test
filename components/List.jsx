import { useState } from "react";
import Blogs from './Blogs'

const List = ()=> {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem Ipsum', author: 'Yusufia', id: 1 },
        {title: 'Welcoming Party', body: 'Lorem Ipsum', author: 'Isah', id: 2 },
        {title: 'Web Development tips', body: 'Lorem Ipsum', author: 'Haydar', id: 3 },
    ])
    return(
        <div>
            <Blogs blogs={blogs} title="All Blogs"/>
            <Blogs blogs={blogs.filter((blog) => blog.author == 'Yusufia')} title="Yusufia Blogs"/>
        </div>
    )
}

export default List