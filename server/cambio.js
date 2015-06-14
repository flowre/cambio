app = require('express.io')();
app.http().io();

//build your realtime-web app

app.listen(8080);

app.io.route('draw', {
    drawDeck: function(req) {
        // update your customer
    },
    drawDiscard: function(req) {
        // remove your customer
    },
});