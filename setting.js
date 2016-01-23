module.exports = {
	//DataStoreTimeout : 2*24*60*60,
	DataStoreTimeout : 30*60, //30 min
	token : null,
	ip_address : process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",
	port : process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 7881,	
	NeonURL : 'http://nu.edu.pk/NeONStudent/',
	DefaultTimeout : 6000, // 6 seconds
	DefaultHeaders : {
		'Accept'			:'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
		'Accept-Encoding'	:'gzip, deflate',
		'Accept-Language'	:'en-GB,en;q=0.8,en-US;q=0.6',
		'Cache-Control'		:'no-cache',
		'Connection'		:'keep-alive',
		'DNT'				:'1',
		'User-Agent'		:'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36',
		'Pragma'			:'no-cache',
		'Upgrade-Insecure-Requests'	:'1',
		'Host'				:'nu.edu.pk',
		'Origin'			:'http://nu.edu.pk'
	}
}


