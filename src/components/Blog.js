import React from 'react';

const Blog = () => {
    return (
        <div className='container sm-flex'>
            <div className='sporphyBlog'>

                <h2>1. Difference between authorization and authentication</h2>
                <p>Both the terms are often used in conjunction with each other when it comes to security and gaining access to the system. Both terms very key topics that are often associated with the web as key pieces of its service infrastructure. However, both these terms are quite different with completely different concepts. Now you’re wondering what these terms are, well they are known as authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system. In even more simpler terms authentication is the process of verifying oneself, while authorization is the process of verifying what you have access to.</p>
                <br />
                <h2>2. Why we use Firebase? What other options we have implement authentication?</h2>
                <p>We use firebase cause it is a powerful service that helps in building applications quickly without reinventing the components or modules. Services like analytics, authentication, databases, configuration, file storage, push messaging are provided by firebase thereby making it easy for the developers to focus on the user experience of the application.
                </p>
                <br />
                <h2>3. What services which Firebase provides?</h2>
                <p>Analytics,
                    Development,
                    Authentication,
                    Real-time Database,
                    Cloud Messaging,
                    Hosting,
                    Storage.
                </p>

            </div>

        </div>
    );
};

export default Blog;