const Post = require('./post');
const React = require('react');

module.exports = function({ thread, isPreview }) {
  const { id, headPost } = thread;
  return <div className="thread">
    <Post post={headPost} isHeadPost isPreview={isPreview} />
    {isPreview && <div className="thread-info">
      В треде {thread.postCount} постов
    </div>}
    {headPost.replies.map(p => <Post post={p} />)}
  </div>;
}
