import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}

    

    <form method="post"
      onSubmit={(e)=> {
        e.preventDefault()


        fetch("https://emailoctopus.com/api/1.5/lists/c5227eae-e23a-11e8-a3c9-06b79b628af2/contacts", {

        method:"POST",
        headers:{"Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*"},
        body:{
            "api_key": "49d1e20d-ec53-11e8-a3c9-06b79b628af2",
            "email_address": "thomas.maclean@gmail.com",
            "fields": {
                "FirstName": "Thomas",
                "LastName": "MacLean"
            }
        	
        }
        })
      }}
    >
        
        <div class="email-octopus-form-row">
            <label for="field_0">Email address</label>
            <input id="Email" name="field_0" type="email" placeholder=""/>
        </div>

        <div class="email-octopus-form-row">
            <label for="field_1">First name</label>
            <input id="FirstName" name="field_1" type="text" placeholder=""/>
        </div>
<div>
    <input type="submit" value="submit"/>
</div>
      
    </form>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
