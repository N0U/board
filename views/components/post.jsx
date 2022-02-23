const React = require('react');
const Image = require('./image');

module.exports = function({ post, isHeadPost, isPreview }) {
  const { id, title, content, createdAt, Attachments: attachments} = post;
  return <div className={isHeadPost? "post head-post" : "post"}>
    <div className="post-container">
      <div className="post-info">
          {title && <span className="post-title">{title}</span>}
          <span className="post-date">{createdAt.toLocaleString('ru-RU')}</span>
          <span className="post-id">№{id}</span>
          {isPreview &&  <a href={`/${id}`}>К треду</a>}
      </div>
      <div className="attachments">{attachments.map(a => <Image attachment={a} />)}</div>
      <div className="post-content">{content}</div>
    </div>
  </div>;
}
