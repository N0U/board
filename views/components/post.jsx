const React = require('react');
const Image = require('./image');

module.exports = function({ post }) {
  const { id, title, content, createdAt, Attachments: attachments} = post;
  return <div>
    <h3>
        <span>{id}</span>
        <span>{title}</span>
        <span>{createdAt.toDateString()}</span>
    </h3>
    <div>{attachments.map(a => <Image attachment={a} />)}</div>
    <div>{content}</div>
  </div>;
}
