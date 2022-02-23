const React = require('react');
const Layout = require('./layout');

module.exports = function(props) {
  console.log(props);
  return <Layout>
    <h1>NOT FOUND</h1>
  </Layout>;
}
