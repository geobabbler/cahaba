/**
 * Catalog
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	//path: 'string'
    
  },
  
  getFolders: function (root) {

			var fs = require('fs');
			return fs.readdirSync(root).filter(function (file) {
				return fs.statSync(root + '/' + file).isDirectory();
			});
    }
  }


