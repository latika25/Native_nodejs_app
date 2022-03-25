const http = require('http');
const fs = require("fs");
const myserver = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    var myurl = request.url;
    if (myurl === "/about") {
        const pg_a = fs.readFileSync("./about.html");
        response.write(pg_a);
        //response.write("<h2>About Page</h2>")
    }
    else if (myurl === "/contact") {
        const pg_c = fs.readFileSync("./contact.html");
        response.write(pg_c);
    }
    else if (myurl === "/register") {
        const pg_r = fs.readFileSync("./register.html");
        response.write(pg_r);

    }
    else if (myurl === "/last") {
        const pg_l = fs.readFileSync("./last.html");
        response.write(pg_l);

    }
    else {
        const pg_f = fs.readFileSync("./first.html");
        response.write(pg_f);
    }
    response.end();
})
myserver.listen(3000);
myserver.on("connection", (result) => {

    console.log("Connection Established");
    //console.log(result)
})