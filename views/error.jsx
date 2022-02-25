const React = require('react');
const Layout = require('./layout');

module.exports = function({ errors }) {
  return <Layout forms={false}>
    <div className="error">
      {errors.map(e => {
        switch(e) {
          case 'attachments':
            return <h1>Нельзя создать тред без вложений</h1>;
          case '_error':
            return <h1>Нельзя создать пустой пост</h1>;
        }
      })}
      <a href="javascript:history.back()">Назад</a>
    </div>
  </Layout>;
}
