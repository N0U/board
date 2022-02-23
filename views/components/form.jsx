const React = require('react');

module.exports = function({ isReply }) {
  return <form className="form" method="POST">
    <div className="form-row">
      <label htmlFor="fname">Заголовок</label>
      <input type="text" id="title" name="title" />
    </div>
    <div className="form-row">
      <label htmlFor="content">Текст</label>
      <textarea type="text" id="content" name="content"></textarea>
    </div>
    <div className="form-row butons-row">
      <div className="form-upload"><input type="hidden" role="uploadcare-uploader" name="attachments" data-multiple="true" data-multiple-max="5"/></div>
      <input type="submit" value="Отправить" />
    </div>
  </form>;
}
