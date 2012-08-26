# Connect - Union

This is a fork of [connect](http://github.com/senchalabs/connect) to test the compatibility of the latest connect plugins with [union](http://github.com/flatiron/union) middleware

This has been already done by pksunkara with an older connect version: https://github.com/pksunkara/connect-union
I've just followed his footsteps using Connect 2.4.4


## Status

  ✖ 7 of 164 tests failed:

  1) connect.cookieSession() should reset on invalid parse:
     TypeError: Cannot read property 'should' of undefined
      at Array.app.use.req.session.cookie.path [as 2] (/home/framp/connect/test/cookieSession.js:102:27)                    
      at dispatch (/home/framp/connect/node_modules/union/lib/routing-stream.js:119:21)                                     
      at g (events.js:185:14)                                                                                               
      at EventEmitter.emit (events.js:85:17)                                                                                
      at RoutingStream.route (/home/framp/connect/node_modules/union/lib/routing-stream.js:114:23)                          
      at Array.cookieSession [as 1] (/home/framp/connect/lib/middleware/cookieSession.js:116:5)                             
      at dispatch (/home/framp/connect/node_modules/union/lib/routing-stream.js:110:21)                                     
      at g (events.js:185:14)                                                                                               
      at EventEmitter.emit (events.js:85:17)                                                                                
      at RoutingStream.route (/home/framp/connect/node_modules/union/lib/routing-stream.js:114:23)                          
      at Array.cookieParser [as 0] (/home/framp/connect/lib/middleware/cookieParser.js:60:5)                                
      at dispatch (/home/framp/connect/node_modules/union/lib/routing-stream.js:110:21)                                     
      at RoutingStream.route (/home/framp/connect/node_modules/union/lib/routing-stream.js:121:5)                           
      at g (events.js:185:14)                                                                                               
      at EventEmitter.emit (events.js:115:20)                                                                               
      at IncomingMessage.Stream.pipe (stream.js:112:8)                                                                      
      at Server.requestHandler (/home/framp/connect/node_modules/union/lib/core.js:50:9)                                    
      at Server.EventEmitter.emit (events.js:91:17)                                                                         
      at HTTPParser.parser.onIncoming (http.js:1793:12)                                                                     
      at HTTPParser.parserOnHeadersComplete [as onHeadersComplete] (http.js:111:23)                                         
      at Socket.socket.ondata (http.js:1690:22)                                                                             
      at TCP.onread (net.js:402:27)                                                                                         

  2) connect.static() when a trailing backslash is given should 500:
     Error: Parse Error
      at Socket.socketOnData (http.js:1366:20)                                                                              
      at TCP.onread (net.js:402:27)                                                                                         

  3) connect.static() when mounted should redirect relative to the originalUrl:
     TypeError: Property '0' of object /static is not a function
      at dispatch (/home/framp/connect/node_modules/union/lib/routing-stream.js:119:21)                                     
      at RoutingStream.route (/home/framp/connect/node_modules/union/lib/routing-stream.js:121:5)                           
      at g (events.js:185:14)                                                                                               
      at EventEmitter.emit (events.js:115:20)                                                                               
      at IncomingMessage.Stream.pipe (stream.js:112:8)                                                                      
      at Server.requestHandler (/home/framp/connect/node_modules/union/lib/core.js:50:9)                                    
      at Server.EventEmitter.emit (events.js:91:17)                                                                         
      at HTTPParser.parser.onIncoming (http.js:1793:12)                                                                     
      at HTTPParser.parserOnHeadersComplete [as onHeadersComplete] (http.js:111:23)                                         
      at Socket.socket.ondata (http.js:1690:22)                                                                             
      at TCP.onread (net.js:402:27)                                                                                         

  4) connect.session() req.session .cookie when the pathname does not match cookie.path should not set-cookie:
     TypeError: Cannot set property 'foo' of undefined
      at Array.2 (/home/framp/connect/test/session.js:405:31)                                                               
      at dispatch (/home/framp/connect/node_modules/union/lib/routing-stream.js:110:21)                                     
      at g (events.js:185:14)                                                                                               
      at EventEmitter.emit (events.js:85:17)                                                                                
      at RoutingStream.route (/home/framp/connect/node_modules/union/lib/routing-stream.js:114:23)                          
      at Array.session [as 1] (/home/framp/connect/lib/middleware/session.js:213:66)                                        
      at dispatch (/home/framp/connect/node_modules/union/lib/routing-stream.js:110:21)                                     
      at g (events.js:185:14)                                                                                               
      at EventEmitter.emit (events.js:85:17)                                                                                
      at RoutingStream.route (/home/framp/connect/node_modules/union/lib/routing-stream.js:114:23)                          
      at Array.cookieParser [as 0] (/home/framp/connect/lib/middleware/cookieParser.js:60:5)                                
      at dispatch (/home/framp/connect/node_modules/union/lib/routing-stream.js:110:21)                                     
      at RoutingStream.route (/home/framp/connect/node_modules/union/lib/routing-stream.js:121:5)                           
      at g (events.js:185:14)                                                                                               
      at EventEmitter.emit (events.js:115:20)                                                                               
      at IncomingMessage.Stream.pipe (stream.js:112:8)                                                                      
      at Server.requestHandler (/home/framp/connect/node_modules/union/lib/core.js:50:9)                                    
      at Server.EventEmitter.emit (events.js:91:17)                                                                         
      at HTTPParser.parser.onIncoming (http.js:1793:12)                                                                     
      at HTTPParser.parserOnHeadersComplete [as onHeadersComplete] (http.js:111:23)                                         
      at Socket.socket.ondata (http.js:1690:22)                                                                             
      at TCP.onread (net.js:402:27)                                                                                         

  5) connect.static() on ENAMETOOLONG should next():
     Error: timeout of 2000ms exceeded
      at Object._onTimeout (/usr/lib/node_modules/mocha/lib/runnable.js:142:14)                                             
      at Timer.list.ontimeout (timers.js:101:19)                                                                            

  6) connect.static() on ENAMETOOLONG should next():
     Error: timeout of 2000ms exceeded
      at Object._onTimeout (/usr/lib/node_modules/mocha/lib/runnable.js:142:14)                                             
      at Timer.list.ontimeout (timers.js:101:19)                                                                            

  7) connect.timeout() when above the timeout with a partial response should do nothing:
     Error: timeout of 2000ms exceeded
      at Object._onTimeout (/usr/lib/node_modules/mocha/lib/runnable.js:142:14)                                             
      at Timer.list.ontimeout (timers.js:101:19)                                                                            




## Why union is better than connect?

As a middleware, union is better than connect because:

* It can deal with streams by default.
* You can use events instead of passing around a callback, the event emitter provided allows a context associated with middleware rather than relying on adding things to req. This conceptual divide allows a focus on contextual business logic and separation of concerns (the in/out vs the evaluation of the in/out) makes it simpler to know if a field is something a middleware is providing

## Compatibility testing

* Clone the repository

```bash
git clone git://github.com/framp/connect-union
```

* Test compatibility

```bash
npm install
make test
```