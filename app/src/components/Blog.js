import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';


const Blog = ({ cache, updateCache, isLargeScreen }) => {

    const [posts, setPosts] = useState(cache);

    useEffect(() => {
        updateCache(posts);
    }, [posts]);

    useEffect(() => {
        sendRequest();
    }, []);
    
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

    const sendRequest = () => {
        // e.preventDefault();

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
                <ProjectCard
                    isLargeScreen={isLargeScreen}
                    alignment={"left"}
                    project={{
                        "title": post.title,
                        "host-url":
                            `https://sparksnotes.hashnode.dev/${post.slug}`,
                        "github-url": undefined,
                        "img-src": post.coverImage,
                        "desc": post.brief,
                        "date": post.dateAdded,
                        "cta": "Read more!",
                    }} />
            );
        }):
        undefined

    return (
        <div className="section blog">
            <h1 className="section-title">
                <a
                href="https://sparksnotes.hashnode.dev">
                        [ Check out&nbsp;
                    <em className="link-hover">Sparks' Notes!</em>
                </a> ]
            </h1>
            <div className="blog-content">
                {/* <button onClick={sendRequest} value="REQUEST">REQUEST</button> */}
                <div>
                    {renderedPosts}
                </div>
            </div>
        </div>
    );
};

export default Blog;