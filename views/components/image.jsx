const React = require('react');

module.exports = function({ attachment }) {
  const { fullUrl, thumbnailUrl } = attachment;
  return <a href={fullUrl}><img src={thumbnailUrl}/></a>;
}
