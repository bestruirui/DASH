var os 	= require('os-utils');


os.cpuUsage(function(v){
	console.log( 'CPU Usage (%): ' + v );
});

os.cpuFree(function(v){
	console.log( 'CPU Free:' + v );
});

    console.log( os.freememPercentage() );
