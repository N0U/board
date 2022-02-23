const React = require('react');
const Form = require('./components/form');

module.exports = function(props) {
  return (<html>
    <head>
      <meta charSet="UTF-8"/>
        <script dangerouslySetInnerHTML={{__html: `
            UPLOADCARE_PUBLIC_KEY = '${process.env.UPLOADCARE_PUBLIC_KEY}';
            UPLOADCARE_LOCALE = 'ru';
            UPLOADCARE_TABS = 'file';
        `}} />
        <script src="https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js"></script>

        <link rel="stylesheet" href="css/reset.css" />
        <link rel="stylesheet" href="css/main.css" />
    </head>
    <body>
      <div className='content'>
        <Form />
        <div className="top">
          <a href="/">Главная</a>
        </div>
        <hr />
        {props.children}
        <hr />
        <Form />
      </div>
    </body>
  </html>);
}
