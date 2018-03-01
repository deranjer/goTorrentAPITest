#goTorrentAPITest


goTorrentAPITest is a basic JS program that allows you to enter and run commands against the goTorrent websocket API: [goTorrent](https://github.com/deranjer/goTorrent).

View the websocket api documents [here](https://deranjer.github.io/API/api/)

### Setup

Just download the repo and setup your specific settings in `communicate.js`.

Your `connectionAddress` and `clientAuthString` can be found in your goTorrent `kickwebsocket-generated.js` under `public/static/js`.

If you want to automatically connect on start un-comment the ws.send on line 16 to automatically authenticate.

### Sending Commands

Next open `index.html` in a web browser, and you should be connected to your goTorrent instance.

You will see the response from the server saying you are connected (and another one if you are authenticated automatically).

Once you authenticate you can send commands, just enter the messageType and then the command (in raw JSON) and click send to communicate with the server.



