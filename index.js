const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log('Someone request At Main dirtories')
});

app.get('/home',(req,res) => {
 res.sendFile(__dirname + '/home.html')
 console.log('Someone request At /home dirtories')
})

app.get('/C/:mypara', (req, res) => {
  res.send('<head> <link rel="shortcut icon" href="https://mickeyhellwebsite.web.app/icon.ico" type="image/x-icon"> </head>' +
    '<div class="color"> ' + 'Hello My name is ' + req.params.mypara + ' And I like ' + req.query.like +
    '<br>' + '<br>' + 'This Site You Can Control Your name and Your Thing That Your Like in the URl' +
    '<br>' + '<br>' + '<img src="https://mickeyhellwebsite.web.app/150%20Sub.png">' + '</div>' +
    '<style> .html,body {padding: 0;margin: 0; } .color { background: rgb(0,25,36);background: linear-gradient(16deg, rgba(0,25,36,1) 0%, rgba(21,24,42,1) 36%, rgba(87,17,48,1) 56%, rgba(118,121,9,1) 77%, rgba(0,212,255,1) 100%); color: rgb(78, 150, 212);} </style> ' +
    '<title>My name is ' + req.params.mypara + 'And Like' + req.query.like +
    '</title>' + '<style> body {background: rgb(0,0,0);background: linear-gradient(16deg, rgba(0,0,0,1) 0%, rgba(0,36,255,1) 36%, rgba(255,0,113,1) 56%, rgba(248,255,0,1) 72%, rgba(0,212,255,1) 90%);}</style>' +
    '<div class="COLOR"> This is a Very Cool Things You know I kidna Like this shit you what i am talking about Yeah i Like That </div>' +
    ' <style> .COLOR {color: rgb(99, 201, 201);} </style> ' 
  )
  console.log('Someone request at Costume Parameter Page!!')
  console.log('With The Name Is : ' + req.params.mypara + 'And Like : ' + req.query.like)
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
    console.log('Message : '+ msg);

  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
