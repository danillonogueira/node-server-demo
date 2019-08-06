const express= require('express');
const cookieParser = require('cookie-parser');
// Única maneira que achei para resolver o problema do CORS
const cors = require('cors');
const app = express();
const user = {
  username: 'username',
  password: 'password'
}

app.use(cors());
app.use(cookieParser());
app.listen(8000, () => {
  console.log('Node.js server listening on port 8000!')
});
app.get('/', (req, res) => {
  if (
      req.headers.username === user.username &&
      req.headers.password === user.password
    ) {
    
    return res
      .cookie('Cookie ', 'huashdiahuisd')
      .status(200)
      .json({ message: "User successfully authenticated" });
  }

  return res
    .status(401)
    .json({ message: 'Incorrect username or password' });
});