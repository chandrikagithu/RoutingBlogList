// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {eachCommentDetails} = props
  const {title, description, publishedDate} = eachCommentDetails
  return (
    <>
      <li className="list-details">
        <div className="title-time">
          <h1 className="title">{title}</h1>
          <p className="time">{publishedDate}</p>
        </div>
        <p className="description">{description}</p>
        <hr />
      </li>
    </>
  )
}
export default BlogItem
