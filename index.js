const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // console.log("res.data");
  res.send('Hello from the main branch! Welcome kunal');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
