const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const cors = require('koa2-cors');

const socketIO = require('socket.io');

app.use(bodyParser({enableTypes: ['text', 'json']}));

app.use(cors({
  origin: '*'
}));

const Router = require('koa-router');

const router = new Router();

let groups = [
  'nokia', 'dst'
]

router.get('/', async(ctx) => {
  ctx.body = {'groups': groups};
});

router.get('/err', async(ctx)=> {
  throw new Error('Whups');
})

router.post('/', async(ctx) => {
  groups = groups.push(ctx.request.body.groupName)
  console.log(ctx.request.body)
  ctx.status = 201
})

app.use(router.routes());

const server = app.listen(3000, () => {
  console.log(`App is listening on port 3000`)
});


const io = socketIO(server);
io.on('connection', (socket) => {
  socket.emit('message', 'New user connected');
  console.log('User connected with id ' + socket.id);

  socket.on('message', data => {
console.log('User added joke', data)
  });
});

