module.exports = function(request, response) {
		var fs = require('fs');

		var imgRe = /^\/images\/.+\.jpg|gif|png|jpeg$/g;
		var cssRe = /^\/stylesheets\/.+\.css$/g;


		if(request.url.match(/jpg|gif|jpeg/g)){
			var fileType = request.url.match(/jpg|gif|jpeg|png/g);
		}
		if(request.url === '/') {
	        fs.readFile('views/index.html', 'utf8', function (errors, contents){
	            response.writeHead(200, {'Content-Type': 'text/html'});
	            response.write(contents); 
	            response.end();
	        });
	    }
	    else if(imgRe.exec(request.url)){
	    	fs.readFile('.'+request.url, function (errors, contents){
	    		if(contents){
	    			response.writeHead(200, {'Content-Type': 'image/'+fileType[0]});
	            	response.write(contents);
	    		} else {
	    			response.writeHead(404);
	    		}
	    		response.end();
	    	});
	    }
	    else if(cssRe.exec(request.url)){
	    	fs.readFile('.'+request.url, function (errors, contents){
	    		if(contents){
	    			response.writeHead(200, {'Content-Type': 'text/css'});
	            	response.write(contents); 
	    		} else {
	    			response.writeHead(404);
	    		}
	    		response.end();
	    	});
	    }
	    else {
	        response.end('File not found!!!');
	    }
	}