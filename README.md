[![mindtwo GmbH](https://www.mindtwo.de/downloads/doodles/github/repository-header.png)](https://www.mindtwo.de/)

<div align="center">
  <p align="center">
    <img src="https://img.shields.io/github/check-runs/mindtwo/laravel-starter-kit/main">
    <img src="https://img.shields.io/badge/php-%3E%3D%208.4-8892BF.svg">
  </p>

  <strong>
    <h2 align="center">Laravel Starter Kit</h2>
  </strong>

  <p align="center">
    A Laravel 12 starter kit with Filament, React and Vite
  </p>

  <p align="center">
    <strong>
    <a href="https://mindtwo.github.io/laravel-starter-kit">documentation</a>
    </strong>
  </p>

  <br>

  <p align="center">
    <img src="https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" height="45" />
    <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" height="45" />
  </p>
</div>
<br />

## Index

<pre>
<a href="#related-projects"
>> Related Projects ................................................................. </a>
<a href="#installation"
>> Installation ..................................................................... </a>
<a href="#linting"
>> Linting .......................................................................... </a>
<a href="#tests"
>> Tests ............................................................................ </a>
<a href="#deployment"
>> Deployment ....................................................................... </a>
</pre>

## Related Projects

- Any related project

## Installation

Clone and set up the project:

```bash
git git@github.com:mindtwo/sample-app-starter-kit.git
just --list # Check out available tasks
just setup
npm i
npm run build
# Application running at https://laravel-starter-kit.test
```

## Linting

To lint (and fix) your PHP code, run the following command:

```bash
just lint
```

Make sure your code passes before pushing, since otherwise the build will fail and your pull request
won't be merged.

## Tests

Run the tests with `just test`. This will run both unit and integration tests. A code coverage
report can be generated with `just coverage`. This will take **significantly** longer than just
running the tests normally.
