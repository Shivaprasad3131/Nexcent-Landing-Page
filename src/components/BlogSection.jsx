import React from "react";
import "./BlogSection.css";
import blog1 from "../assets/image 18.png";
import blog2 from "../assets/image 19.png";
import blog3 from "../assets/image 20.png";

const BlogSection = () => {
  const articles = [
    {
      img: blog1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      img: blog2,
      title: "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      img: blog3,
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2>Caring is the new marketing</h2>
        <p className="blog-intro">
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
        </p>

        <div className="blog-grid">
          {articles.map((article, index) => (
            <div className="blog-card" key={index}>
              <img src={article.img} alt={`Blog ${index + 1}`} />
              <div className="blog-card-content">
                <p>{article.title}</p>
                <a href="/">Readmore →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
