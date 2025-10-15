# OpenCloning documentation

A static site for [OpenCloning](https://opencloning.org), hosted at [docs.opencloning.org](https://docs.opencloning.org).

## Running locally

### Install dependencies

To install the dependencies, we used poetry (see [poetry installation instructions](https://python-poetry.org/docs/)). In the source directory run:

```bash
# install dependencies in ./.venv
poetry install
```

### Update submodules

The documentation uses text from the OpenCloning repositories, via `mkdocs` include. This allows us to keep a single version of the documentation.

```bash
git submodule update --init --recursive
```


### Run a dev server that gets updated as you type

```bash
# activate virtual environment
source .venv/bin/activate
# start dev server
mkdocs serve -a localhost:8001
```

Go to http://127.0.0.1:8001/ and you should see the page.

## Adding content

Full documentation on the theme and static site generator used (Material for MkDocs) can be found in the [official documentation](https://squidfunk.github.io/mkdocs-material/). There is some extra info in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Content license

The content of this website are licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).

## Contributing

See [contributing.md](./docs/contributing.md).
