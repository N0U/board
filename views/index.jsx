const React = require('react');
const Layout = require('./layout');
const Thread = require('./components/thread');

module.exports = function({ page, pageCount, threads }) {
  return (<Layout>
    {threads.map(t => <Thread key={t.id} isPreview thread={t} />)}
    <div className="page-links">
      {[...Array(pageCount).keys()].map(p => <a key={p} href={`/?page=${p}`}>{p}</a>)}
    </div>
  </Layout>);
}
