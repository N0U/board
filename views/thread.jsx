const React = require('react');
const Layout = require('./layout');
const Form = require('./components/form');
const Thread = require('./components/thread');

module.exports = function(props) {
  return <Layout>
    <Thread thread={props.thread} />
    <hr />
    <Form />
  </Layout>;
}
