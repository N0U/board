const Post = require('./post');
const React = require('react');

module.exports = function(props) {
  const { thread } = props;
  const { headPost } = thread;
  return <div>
    <Post post={headPost} />
    {headPost.replies.map(p => <Post post={p} />)}
  </div>;
}
