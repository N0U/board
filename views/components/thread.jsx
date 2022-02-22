const Post = require('./post');

<div>
  {thread.posts.map(p => <Post post={p} />)}
</div>
