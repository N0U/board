const React = require('react');

module.exports = function({ attachment }) {
  const { fullUrl, thumbnailUrl } = attachment;
  return <a className="image" href={fullUrl}><img src={thumbnailUrl}/></a>;
}
