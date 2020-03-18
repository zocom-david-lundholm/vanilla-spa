const express = require('express')
const app = express()

app.use( express.static('public') )
app.use( express.json() )

// This route serves some random data
app.get('/api/stuff', (req,res) => {
    res.json({
        data: [
            {id:1, title: "Foo"},
            {id:2, title: "Bar"},
            {id:3, title: "Baz"},
            {id:4, title: "Foo"},
        ]
    })
})

app.listen(8080, () => console.log("Server started on port 8080"))