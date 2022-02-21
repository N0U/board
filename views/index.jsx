const Layout = require('./layout');
const Thread = require('./components/thread');

<Layout>
  {threads.map(t => <Thread key={t.id} thread={t} />)}
</Layout>
