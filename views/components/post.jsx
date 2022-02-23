const React = require('react');

module.exports = function({ post }) {
  const { id, title, content, createdAt} = post;
  return <div>
    <h3>
        <span>{id}</span>
        <span>{title}</span>
        <span>{createdAt.toDateString()}</span>
    </h3>
    <div>{content}</div>
  </div>;
}
