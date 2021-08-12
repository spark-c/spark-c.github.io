import React from 'react';


export const about_content = (
    <div className="about-content">
        <p>
            My name is Collin Sparks -- some people have also taken to calling me "Sparkles", which is fine too!
        </p>
        <p>
            In short, I love solving problems and doing things that are useful to someone. <span className="italic">Doubly</span> so when the solution involves cool technology!
        </p>


        {/* ACCORDION */}
        {/* try one of those list-detail tag things, Toni on twitter */}
       
        {/* Do I like learning? */}
        <p> 
            My mom and I always joked that I would end up being a "forever-student" that went to college and just... kept going. I loved learning all sorts of things! For me, one of the biggest upsides of learning to code was the fact that I'l always have more pathways for learning and trying new things.
        </p>

        {/* How did I start programming? */}
        <p> 
            In 2018, my mom was dealing with some disgustingly tedious computer tasks at her job, and I did a bit of research to see if there was anything I could find to help her out. I found a course by Al Sweigart, called "Automate the Boring Stuff With Python" which, coincidentally, was the exact thing I was trying to do. I dug into the course, and...
        </p>
        <p>Hook... Line... SINKER.</p>
        <p>
            I've been <span className="italic">amazed</span> at all of the things I've learned how to do in the past few years with technology.
        </p>

        {/* Did I see something about dance/theatre? */}
        <p> 
            I have a huge love for art in general, and especially the performing arts. Big time. 
        </p>
        <p>
            Growing up in Ohio, I spent about 8 years dancing and peforming in a dance academy / company called BalletMet. It was awesome. Ballet is at the intersection of "incredibly artistic" and "wildly technical", and completely shaped my life experience as I was growing up.
        </p>
        <p>
            And then in college, I got really into theatre! I was both a dancer and an actor for a while, but ended up getting very interested in Lighting Design as well. I've designed / implemented / programmed lights for a bunch of shows now, both in and out of school.
        </p>
    </div>
);

export const accordionConfig = [
    {
        label: "Item 1",
        content: "This is item 1's content!",
    },
    {
        label: "Item 2",
        content: "This is the content for item number two!",
    },
]