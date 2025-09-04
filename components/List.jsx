import { useState, useEffect } from "react";
import Blogs from './Blogs'

const List = ()=> {
    const [blogs, setBlogs] = useState([
        { title: 'Welcoming Party', body: 'Lorem Ipsum', author: 'Isah', id: 2 },
        { title: 'Web Development tips', body: 'Lorem Ipsum', author: 'Haydar', id: 3 },
        { title: 'My new website', body: 'Lorem Ipsum', author: 'Yusufia', id: 1 },
    ])
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    const [name, setName] = useState('Yusufia');
    useEffect(() => {
        console.log('use effect ran')
    }, [name])
    return(
        <div>
            <Blogs blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <Blogs blogs={blogs.filter((blog) => blog.author == 'Yusufia')} title="Yusufia Blogs" />
            <button onClick={() => setName('Bichi')}>Change name</button>
            <p>
                { name }
            </p>
        </div>
    )
}

export default List