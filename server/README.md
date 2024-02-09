I'm working on running LLRT locally with a given handler.

Boot the server
```
node server/lambda-server.js
```

From the handler directory, tell the local `llrt` binary where the handler is and where the Lambda server is running.
```
cd src/http/get-llrt
```

```
_HANDLER=index.handler \
AWS_LAMBDA_RUNTIME_API=localhost:3000 \
../../../llrt
```

Use the browser to make a request to the Lambda server at `localhost:3000` and see the handler response.
