import Nav from '../../components/1-Nav/Nav'
import './Blog.css'
import { FaEye, FaClock } from 'react-icons/fa'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FaCubesStacked } from 'react-icons/fa6'
import Footer from '../../components/2-Footer/Footer'

const Blog = () => {
  return (
    <div className="blog-page">
      <Nav bgColor="#ffffff" />
      <section className="blog-hero">
        <div className="blog-hero-container">
          <div className="blog-hero-content">
            <div className="blog-meta">
              <span className="blog-author">By Themadbrains in </span>
              <span className="blog-category">inspiration</span>
            </div>
            <h1 className="blog-title">
              Why Swift UI Should Be on the Radar of Every Mobile Developer
            </h1>
            <p className="blog-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <button className="blog-cta-button">
              Start learning now
            </button>
          </div>
          <div className="blog-hero-image">
            <img 
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Developer working on laptop" 
            />
          </div>
        </div>
      </section>

      {/* Section 2: Reading Blog List */}
      <section className="blog-list-section">
        <div className="blog-list-container">
          <h2 className="blog-list-title">Reading blog list</h2>
          <div className="blog-cards-grid">
            <div className="blog-card">
              <div className="blog-card-image">
                <img 
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="UX/UI Design" 
                />
                <div className="blog-card-overlay">
                  <span className="blog-card-label">ux/ui</span>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-image">
                <img 
                  src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="React Development" 
                />
                <div className="blog-card-overlay">
                  <span className="blog-card-label">React</span>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-image">
                <img 
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="PHP Development" 
                />
                <div className="blog-card-overlay">
                  <span className="blog-card-label">PHP</span>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-image">
                <img 
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="JavaScript Development" 
                />
                <div className="blog-card-overlay">
                  <span className="blog-card-label">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Related Blog */}
      <section className="related-blog-section">
        <div className="related-blog-container">
          <div className="related-blog-header">
            <h2 className="related-blog-title">Related Blog</h2>
            <a href="#" className="related-blog-see-all">See all</a>
          </div>

          <div className="related-blog-cards">
            <div className="related-blog-card">
              <div className="related-blog-card-image">
                <img 
                  src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Blog post" 
                />
              </div>
              <div className="related-blog-card-content">
                <h3 className="related-blog-card-title">
                  Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                </h3>
                <div className="related-blog-card-author">
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Lina" 
                    className="related-blog-author-avatar"
                  />
                  <span className="related-blog-author-name">Lina</span>
                </div>
                <p className="related-blog-card-excerpt">
                  Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                </p>
                <div className="related-blog-card-footer">
                  <a href="#" className="related-blog-read-more">Read more</a>
                  <div className="related-blog-views">
                    <FaEye className="related-blog-eye-icon" />
                    <span className="related-blog-view-count">251,232</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="related-blog-card">
              <div className="related-blog-card-image">
                <img 
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Blog post" 
                />
              </div>
              <div className="related-blog-card-content">
                <h3 className="related-blog-card-title">
                  Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                </h3>
                <div className="related-blog-card-author">
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Lina" 
                    className="related-blog-author-avatar"
                  />
                  <span className="related-blog-author-name">Lina</span>
                </div>
                <p className="related-blog-card-excerpt">
                  Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                </p>
                <div className="related-blog-card-footer">
                  <a href="#" className="related-blog-read-more">Read more</a>
                  <div className="related-blog-views">
                    <FaEye className="related-blog-eye-icon" />
                    <span className="related-blog-view-count">251,232</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="related-blog-pagination">
            <button className="pagination-btn pagination-btn-left" aria-label="Previous">
              <FaArrowLeft />
            </button>
            <button className="pagination-btn pagination-btn-right" aria-label="Next">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Marketing Articles */}
      <section className="marketing-articles-section">
        <div className="marketing-articles-container">
          <div className="marketing-articles-header">
            <h2 className="marketing-articles-title">Marketing Articles</h2>
            <a href="#" className="marketing-articles-see-all">See all</a>
          </div>

          <div className="marketing-articles-grid">
            <div className="marketing-article-card">
              <div className="marketing-article-image">
                <img 
                  src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Article" 
                />
              </div>
              <div className="marketing-article-content">
                <div className="marketing-article-meta">
                  <div className="marketing-article-category">
                    <FaCubesStacked className="meta-icon" />
                    <span>Design</span>
                  </div>
                  <div className="marketing-article-duration">
                    <FaClock className="meta-icon" />
                    <span>3 Month</span>
                  </div>
                </div>
                <h3 className="marketing-article-title">
                  AWS Certified solutions Architect
                </h3>
                <p className="marketing-article-description">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                </p>
                <div className="marketing-article-footer">
                  <div className="marketing-article-author">
                    <img 
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Lina" 
                      className="marketing-author-avatar"
                    />
                    <span className="marketing-author-name">Lina</span>
                  </div>
                  <div className="marketing-article-pricing">
                    <span className="marketing-price-old">$100</span>
                    <span className="marketing-price-new">$80</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="marketing-article-card">
              <div className="marketing-article-image">
                <img 
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Article" 
                />
              </div>
              <div className="marketing-article-content">
                <div className="marketing-article-meta">
                  <div className="marketing-article-category">
                    <FaCubesStacked className="meta-icon" />
                    <span>Design</span>
                  </div>
                  <div className="marketing-article-duration">
                    <FaClock className="meta-icon" />
                    <span>3 Month</span>
                  </div>
                </div>
                <h3 className="marketing-article-title">
                  AWS Certified solutions Architect
                </h3>
                <p className="marketing-article-description">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                </p>
                <div className="marketing-article-footer">
                  <div className="marketing-article-author">
                    <img 
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Lina" 
                      className="marketing-author-avatar"
                    />
                    <span className="marketing-author-name">Lina</span>
                  </div>
                  <div className="marketing-article-pricing">
                    <span className="marketing-price-old">$100</span>
                    <span className="marketing-price-new">$80</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="marketing-article-card">
              <div className="marketing-article-image">
                <img 
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Article" 
                />
              </div>
              <div className="marketing-article-content">
                <div className="marketing-article-meta">
                  <div className="marketing-article-category">
                    <FaCubesStacked className="meta-icon" />
                    <span>Design</span>
                  </div>
                  <div className="marketing-article-duration">
                    <FaClock className="meta-icon" />
                    <span>3 Month</span>
                  </div>
                </div>
                <h3 className="marketing-article-title">
                  AWS Certified solutions Architect
                </h3>
                <p className="marketing-article-description">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                </p>
                <div className="marketing-article-footer">
                  <div className="marketing-article-author">
                    <img 
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Lina" 
                      className="marketing-author-avatar"
                    />
                    <span className="marketing-author-name">Lina</span>
                  </div>
                  <div className="marketing-article-pricing">
                    <span className="marketing-price-old">$100</span>
                    <span className="marketing-price-new">$80</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="marketing-article-card">
              <div className="marketing-article-image">
                <img 
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Article" 
                />
              </div>
              <div className="marketing-article-content">
                <div className="marketing-article-meta">
                  <div className="marketing-article-category">
                    <FaCubesStacked className="meta-icon" />
                    <span>Design</span>
                  </div>
                  <div className="marketing-article-duration">
                    <FaClock className="meta-icon" />
                    <span>3 Month</span>
                  </div>
                </div>
                <h3 className="marketing-article-title">
                  AWS Certified solutions Architect
                </h3>
                <p className="marketing-article-description">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                </p>
                <div className="marketing-article-footer">
                  <div className="marketing-article-author">
                    <img 
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Lina" 
                      className="marketing-author-avatar"
                    />
                    <span className="marketing-author-name">Lina</span>
                  </div>
                  <div className="marketing-article-pricing">
                    <span className="marketing-price-old">$100</span>
                    <span className="marketing-price-new">$80</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Blog
