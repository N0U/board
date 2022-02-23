const React = require('react');
const Layout = require('./layout');
const Thread = require('./components/thread');

module.exports = function(props) {
  return (<Layout>
    {props.threads.map(t => <Thread key={t.id} thread={t} />)}
  </Layout>);
}
