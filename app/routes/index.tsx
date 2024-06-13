import { html } from "@http/response/html";
import { prependDocType } from "@http/response/prepend-doctype";
import { renderBody } from "@http/jsx-stream/serialize";

export function GET() {
  return html(
    prependDocType(
      renderBody(<Home/>),
    ),
  );
}

function Home() {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/missing.css@1.1.1"/>
      </head>
      <body>
        <header>
          <h1>@http functions</h1>
        </header>
        <main>
          <p>Documentation site coming soon...</p>
        </main>
        <footer>
          <nav class="f-switch">
            <div>
              <h4>Links</h4>
              <ul role="list">
                <li><a href="https://jsr.io/@http" target="blank">jsr</a></li>
                <li><a href="https://github.com/jollytoad/deno_http_fns" target="blank">github</a></li>
              </ul>
            </div>
            <div>
              <h4>Articles</h4>
              <ul role="list">
                <li><a href="https://jollytoad.deno.dev/blog/http_getting_started" target="blank">Getting Started</a></li>
              </ul>
            </div>
          </nav>
          <p><small>© 2024 Mark Gibson</small></p>
        </footer>
      </body>
    </html>
  );
}
