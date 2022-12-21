import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';

const Api = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPost(response.data);
            }).catch(error => console.log(error))

    }, []);
    console.log(post);
    return (
        <>
            <h1>Api Call Results</h1>
            <div>
                Titles
                {post.map((element) => {
                return (
                    <div >
                        <p>{element.title}</p></div>
                )
            })
                }
            </div>
        </>
    )
}

export default Api;
