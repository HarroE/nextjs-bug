This repo demonstrates some weird caching behaviour in Nextjs

steps to reproduce:

- npm install
- npm build
- npm start
- go to localhost:3000 (clear cookies/cache and don't go to /checkout directly!)
- click on "Go to checkout"
- click on "External link to google.com"
- use browser back button to go back

Now the button will still show "Loading..."

A cached page is shown while it is configured as a dynamic page, no hook is ran and also serverside logic will not run.

When you refresh the page and try the button again and click on browser back button you won't see the "Loading..." state
