import React from 'react';
import './Blog.css';
import BlogImage from '../../assets/blog/blog.jpg';

export default function Blog() {
  return (
    <>
    <section id="blog">
        <div className="container">
            <div className="blog_wrapper">
                <div className="blog_col">
                    <h2>Why We’ll Make It Happen</h2>
                    <p>With deep expertise in privacy, digital security, ethical AI, and product architecture, we’re hands-on in every step of Shagsy’s creation. From secure data flows to intuitive features, we ensure every decision aligns with our commitment to innovation, privacy, and user trust. The result? We deliver a seamless, resilient, and privacy-first solution for sexual wellness—driven by our mission and guided by our expertise.</p>
                    <p style={{fontStyle:"italic",fontWeight:"bold"}}>A timeline or infographic illustrating the journey from concept to reality.</p>
                </div>
                <div className="blog_col">
                    <div className="blog_image">
                        <img src="https://thumbs.dreamstime.com/b/make-happen-symbol-concept-words-white-puzzle-beautiful-pink-background-succulent-plant-business-copy-space-341363788.jpg" alt="Blog" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
