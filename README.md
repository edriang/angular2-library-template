# ngx-library-template


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



## License

MIT © [Adrian Gallardo](mailto:agallardo@clarika.com.ar)
