## LLRT deployed with Arc

```txt
npm i
npm run esbuild.arc-llrt
npm run deploy
```

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
