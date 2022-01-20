const Generator = require('yeoman-generator');

module.exports = class extends Generator{

	// welcome message
	welcome(){
		this.log('Welcom to bandit web starter kit !!')
	}

	// copying files
	
	writing(){

		this.fs.copy(
			this.templatePath('index.html'),
			this.destinationPath('index.html'),
		);

		this.fs.copy(
			this.templatePath('css/style.css'),
			this.destinationPath('css/style.css'),
		);

		this.fs.copy(
			this.templatePath('js/app.js'),
			this.destinationPath('js/app.js'),
		);

		this.fs.copy(
			this.templatePath('_gitignore'),
			this.destinationPath('.gitignore'),
		);

	

		this.fs.copy(this.templatePath('.'), this.destinationPath('./'));

	}

	end(){
		this.log(' ');
		this.log('Finished Generating! Happy Coding')
	}



};