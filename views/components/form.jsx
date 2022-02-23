const React = require('react');

module.exports = function(props) {
  return <form method="POST">
    <label htmlFor="fname">Title:</label><br />
    <input type="text" id="title" name="title" /><br />
    <label htmlFor="content">Content:</label><br />
    <textarea type="text" id="content" name="content"></textarea><br />
    <input type="hidden" role="uploadcare-uploader" name="attachments" data-multiple="true" data-multiple-max="5"/>
    <input type="submit" value="Submit" />
  </form>;
}
