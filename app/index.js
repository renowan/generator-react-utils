'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var toUpper = function (text) {
  var text2 = text.charAt(0).toUpperCase() + text.slice(1);
  text2 = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  return text2;
}

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fantastic' + chalk.red('React Utils') + ' generator!'
    ));

    var prompts = [
      {
        type: 'list',
        name: 'kind',
        message: '作りたいファイル種類',
        choices: ['action', 'pageView', 'component', 'redux'],
        default: true
      },
      {
        type: 'input',
        name: 'name',
        message: 'ファイル名',
        default: 'foo'
      }
    ];

    this.prompt(prompts, function (props) {
      // console.log(prompts);
      // console.log(props);
      this.kind = props.kind;
      this.name = props.name;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {

      var moduleName = toUpper(this.name);

      var _config = {
        name: this.name,
        moduleName: moduleName,
        upperName: this.name.toUpperCase(),
        pageClassName: this.name + '-view'
      }

      this._config = _config;

    },

    projectfiles: function () {

      var moduleName = this._config.moduleName;

      if (this.kind === 'action') {
        this.fs.copyTpl(
          this.templatePath('action.js'),
          this.destinationPath('actions/' + this._config.name + 'Action.js'),
          this._config
        );
      }

      if (this.kind === 'component') {
        this.fs.copyTpl(
          this.templatePath('component.js'),
          this.destinationPath('components/' + moduleName + '/' + moduleName + '.js'),
          this._config
        );
        this.fs.copyTpl(
          this.templatePath('pageView.scss'),
          this.destinationPath('components/' + moduleName + '/' + moduleName + '.scss'),
          this._config
        );
      }

      if (this.kind === 'pageView') {
        this.fs.copyTpl(
          this.templatePath('pageView.js'),
          this.destinationPath('views/' + moduleName + '/' + moduleName + 'View.js'),
          this._config
        );

        this.fs.copyTpl(
          this.templatePath('pageViewIndex.js'),
          this.destinationPath('views/' + moduleName + '/index.js'),
          this._config
        );

        this.fs.copyTpl(
          this.templatePath('pageView.scss'),
          this.destinationPath('views/' + moduleName + '/' + moduleName + 'View.scss'),
          this._config
        );
      }

      if (this.kind === 'redux') {
        this.fs.copyTpl(
          this.templatePath('redux.js'),
          this.destinationPath('redux/modules/' + this._config.name + '.js'),
          this._config
        );
      }
    }
  }
});
