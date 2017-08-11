# ngx-library-template


## Steps to use this template project to build libraries

1.  Remove `.git` folder from the root dir. This is important if you checkout the source code from a repository because you are going to create your own library.

    ```bash
    $ rm -R .git
    ```

2.  Replace all `ngx-library-template` text references in files with `your-own-package-name`:
    - README.md
    - package.json
    - .angular-cli.json
    - src/app/app.module.ts
    - src/lib/package.json
    - src/lib/tsconfig.es5.json
    - src/tsconfig.app.json

3.  Remove this steps from the README and complete the library details

4.  Read development notes and build/run notes below

**Important:** If your IDE lints `ngx-library-template` as not found module, ignore this warning.
This library will be loaded as it is configured in `paths` option in `src/tsconfig.app.json`


********************************************************************************
**NOTE:** REMOVE ABOVE DOC BEFORE PUBLISHING YOUR OWN LIBRARY...
********************************************************************************



## Demo

https://edriang.github.io/ngx-library-template/dist-demo/


## Installation

To install this library, run:

```bash
$ npm install ngx-library-template --save
```

**Important:** Also check that listed `peerDependencies` on `package.json` are installed into your project

## Description

TODO...


## Usage

See Demo project, under `src/app` folder


## Run demo locally

```bash
$ npm run start
```


## Development notes

- Lib sources are under `src/lib`
- Demo sources are under `src/app`

**Important:** The sources to be packaged and compiled are the ones listed in `src/lib/index.ts` or any of its dependencies


To create `dist-lib` bundle (dist of the lib app) run:

```bash
$ npm run build-lib
```

To create `dist-demo` bundle (dist of the demo app) run:

```bash
$ npm run build
```


To publish `cd dist-demo` and `npm publish`


**Important:** this project uses two `package.json` files. One, in the root folder, is for defining dependencies to run and build the code and else dependencies used by the demo project. Dependencies of the lib must be configured under `src/lib/package.json` as well as info of the lib itself (name, version, etc)


## Side Notes

This project was built using [angular-cli](https://cli.angular.io/) scaffolding and [generator-angular2-library](https://github.com/jvandemo/generator-angular2-library) rollup-build system


## License

MIT © [Adrian Gallardo](mailto:agallardo@clarika.com.ar)
