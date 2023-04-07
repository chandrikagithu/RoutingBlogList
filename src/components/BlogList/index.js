// Write your JS code here

import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="comment-container">
      {blogsList.map(eachComment => (
        <BlogItem key={eachComment.id} eachCommentDetails={eachComment} />
      ))}
    </ul>
  )
}

export default BlogList
