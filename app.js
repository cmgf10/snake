
var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.set('port',(process.env.PORT || 2000));

//app.use(express.static(__dirname + '/client'));

app.use('/client', express.static(__dirname + '/client'));

app.get('/', function(req,res){
	res.sendFile(__dirname + '/client/index.html');
});



/*
serv.listen(2000);
console.log("Server started");

var SOCKET_LIST ={};
var PLAYER_LIST = {};

const TC = 80; //tamanho do grid 

var Player = function(id){
	var self = {
		x:10,
		y:10,
		xv:0,
		yv:0,
		trail:[],
		tail:5,
		id:id,
		number:"" + Math.floor(10 * Math.random()),
		
	}
	self.updatePosition = function(){
		self.x += self.xv;
		self.y += self.yv;

		if(self.x > TC-1) self.x=0;
		if(self.x <    0) self.x=TC-1;
		if(self.y > TC-1) self.y=0;
		if(self.y <    0) self.y=TC-1;

		self.trail.push({x:self.x,y:self.y});
		while(self.trail.length>self.tail){
			self.trail.shift()
		}		
	}
	return self;
}

var io = require('socket.io')(serv,{});

io.sockets.on('connection', function(socket){
	socket.id = Math.random();	
	SOCKET_LIST[socket.id] = socket;
	
	var player = Player(socket.id);
	PLAYER_LIST[socket.id]=player;


	socket.on('disconnect', function(){
		delete SOCKET_LIST[socket.id];
		delete PLAYER_LIST[socket.id];
	})

	socket.on('keyPress',function(data){
		if(data.inputId === 'left')
			{player.xv=-1; player.yv=0}
		else if(data.inputId==='right')
			{player.xv=1;player.yv=0}
		else if(data.inputId==='up')
			{player.yv=-1;player.xv=0}
		else if(data.inputId==='down')
			{player.yv=1;player.xv=0}
	})
	
});

setInterval(function(){
	var pack = [];
	for(var i in PLAYER_LIST){
		var player = PLAYER_LIST[i];
		player.updatePosition();		
		pack.push({
			x:player.x,
			y:player.y,
			trail:player.trail,
			number: player.number
		})
	}
	
	for(var i in SOCKET_LIST){
			var socket = SOCKET_LIST[i];
			socket.emit('newPositions', pack)			
		}
},2000/15);

*/