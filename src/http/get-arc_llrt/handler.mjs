import arc from '@architect/functions'

export const handler = arc.http(get)

async function get () {
  return {
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Architect</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      max-width: 40rem;
      margin: 0 auto;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      padding: 2rem;
    }
    .margin-left-8 { margin-left: 0.5rem; }
  </style>
</head>
<body class="padding-32">
  <div class="max-width-320">
    <img src="https://assets.arc.codes/logo.svg" />
    <div class="margin-left-8">
      <div>
        <h1>
          <a href="https://github.com/awslabs/llrt">LLRT</a> with Architect
        </h1>
        <p>This handler is LLRT arm64 handled with @architect/functions.</p>
        <ul>
          <li><a href="/">root (nodejs20.x)</a></li>
          <li><a href="/llrt">LLRT</a></li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>
`
  }
}
