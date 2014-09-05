/**
 * Catalog
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	allowedTypes: [{extension: 'shp.zip', description: 'Shapefile'},
  					{extension: 'gdb.zip', description: 'Esri File Geodatabase'},
  					{extension: 'geojson', description: 'GeoJSON'},
  					{extension: 'kml', description: 'KML'},
  					{extension: 'kmz', description: 'KMZ'},
  					{extension: 'topojson', description: 'TopoJSON'}]
    
  },
  
  getFolders: function (root) {

			var fs = require('fs');
			return fs.readdirSync(root).filter(function (file) {
				return fs.statSync(root + '/' + file).isDirectory();
			});
   },
  getDatasets: function (root) {

			var fs = require('fs');
			return fs.readdirSync('./data/' + root).filter(function (file) {
				return fs.statSync('./data/' + root + '/' + file).isDirectory();
			});
  },
   
   validateFile: function(fname) {
		var path = require('path');
		//var fname = 'index.shp.zip';
		//var f2 = path.basename(fname, 'shp.zic');
		//console.log(f2);
		//var ext = 'KmZ';
		var m = null;
		var arr = Catalog.attributes.allowedTypes;

		for(var i = 0; i < arr.length; ++i) {
			var testname = fname.toLowerCase();
			var outname = path.basename(testname, arr[i].extension.toLowerCase());
    		if(outname.length != testname.length) {
        		m = arr[i];
        		break;
    		}
		} 
		return m;  	
   }
  }


