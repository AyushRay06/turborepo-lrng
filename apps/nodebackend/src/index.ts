import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.json({
    msg: "Hello Ayush",
  })
})

app.listen(3000)
