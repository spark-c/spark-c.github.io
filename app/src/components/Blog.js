import React, { useState, useEffect } from 'react';


const Blog = ({ cache, updateCache }) => {

    const [posts, setPosts] = useState(cache);

    useEffect(() => {
        updateCache(posts);
    }, [posts]);
    
    const query = `
    {
        user(username: "collin-sparkles") {
          publication {
            posts(page: 0) {
              title
              brief
              slug
              dateAdded
              coverImage
            }
          }
        }
      }
    `

    const sendRequest = (e) => {
        e.preventDefault();

        async function handleResponse() {
            const data = await fetch('https://api.hashnode.com/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query:query,
                    variables:{}
                })
            });

            return data.json();
        }

        async function getPosts() {
            const handled = await handleResponse();
            setPosts(handled.data.user.publication.posts)
        }
        getPosts();
    };

    const renderedPosts = posts?
        posts.map(post => {
            return(
                <div key={post.title}>{post.title}</div>
            );
        }):
        undefined

    return (
        <div className="section blog">
            <h1 className="section-title">Check out Sparks' Notes!</h1>
            <div className="blog-content">
                <p>
                    This is blog content!
                </p>
                <button onClick={sendRequest} value="REQUEST">REQUEST</button>
                <div>
                    {renderedPosts}
                </div>
            </div>
        </div>
    );
};

export default Blog;