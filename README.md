## LLRT deployed with Arc

For science 👨🏻‍🔬

### Setup

```txt
npm i
npm run esbuild.arc-llrt
npm run deploy
```

### Notes

The bundle is required to run the `@architect/functions` LLRT handler.

LLRT functions won't run locally with Sandbox. A plugin could handle that later.

### Routes

✅ `/` is nodejs20.x

✅ `/llrt` is LLRT

❌ `/arc-llrt` is LLRT with `@architect/functions` `arc.http` handler

error in `/arc-llrt`:

```
ERROR	{
  errorType: 'ReferenceError',
  errorMessage: 'Error resolving module '/var/task/assert' from '/var/task/index.js'',
  stackTrace: [ '    at node_modules/rndm/index.js (/var/task/index.js:5130:18)', '    at __require (/var/task/index.js:11:17)', '    at node_modules/csrf/index.js (/var/task/index.js:5189:16)', '    at __require (/var/task/index.js:11:17)', '    at node_modules/@architect/functions/src/http/session/providers/ddb/create.js (/var/task/index.js:5317:16)', '    at __require (/var/task/index.js:11:17)', '    at node_modules/@architect/functions/src/http/session/providers/ddb/find.js (/var/task/index.js:5364:18)', '    at __require (/var/task/index.js:11:17)', '    at node_modules/@architect/functions/src/http/session/providers/ddb/index.js (/var/task/index.js:5416:16)', '    at __require (/var/task/index.js:11:17)', '    at node_modules/@architect/functions/src/http/session/read.js (/var/task/index.js:5544:15)', '    at __require (/var/task/index.js:11:17)', '    at node_modules/@architect/functions/src/http/index.js (/var/task/index.js:5974:16)', '    at __require (/var/task/index.js:11:17)', '    at node_modules/@architect/functions/src/index.js (/var/task/index.js:8194:16)', '    at __require (/var/task/index.js:11:17)', '    at <anonymous> (/var/task/index.js:8232:32)', '' ]
}
```

## Running LLRT locally

I haven't gotten LLRT working locally in `arc sandbox` but using the `lambda-server.js` (included in [the llrt repo](https://github.com/awslabs/llrt/blob/main/lambda-server.js)) and `llrt` binary works.

See `./server`
