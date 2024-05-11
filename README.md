# Openos Docs Readme

This documentation is built using [Docusaurus v2](https://v2.docusaurus.io/) with `npm`.
Static content delivery is handled using `vercel`.

> Note: The documentation within this repo is specifically focused on the
> Openos validator client maintained by Openos Labs. The more "common"
> documentation, which is generalized to the Openos protocol as a whole and applies
> to all Openos validator implementations, is maintained within the
> `developer-content`
> repo. Those "common docs" are managed by the Openos Foundation within their
> GitHub organization and are publicly accessible via
> [https://docs.openverse.network](https://docs.openverse.network)

## Local Development

To set up the Openos Validator Docs site locally:

- install dependencies using `npm`
- run the local development server
- make your changes and updates as needed

> Note: After cloning this repo to your local machine, all the local development commands are run from within this `docs` directory.

### Install dependencies

Install the site's dependencies via `npm`:

```bash
npm install
```

### Build locally

The build script generates static content into the `build` directory and can be served using any static content hosting service.

```bash
npm run build 
```


> Note: Running this build script is **required** before being able to run the site locally via the `npm run start` command since it will generate the `cli/usage.md` document.

If you run into errors or issues with this step, see [Common Issues](#common-issues) below. See also [CI Build Flow](#ci-build-flow) for more details on production deployments of the docs.

### Local development server

This command starts the Docusaurus local development server and opens up a browser window.

```bash
npm run start
```

> Note: Most changes are reflected live without having to restart the server or refresh the page. However, some changes may require a manual refresh of the page or a restart of the development server (via the command above).

