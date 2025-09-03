# Celerity website repository

This repo contains the sources and scripts to build the Celerity website (https://celerity.github.io) using [Docusaurus](https://docusaurus.io/).

The whole process is complicated slightly by building the API docs from the [celerity runtime](https://github.com/celerity/celerity-runtime) sources, which is accomplished with [🥬doc](https://github.com/celerity/leafy-green-doc), and integrated into the generated website by `scripts/import_api_docs.js`.

## How to build a new website version

1. Clone this repository Use **--recursive** to get the `celerity-runtime` submodule.
2. Update the `celerity-runtime` submodule to the tagged version you want to build docs for.
3. Build the API docs:
    1. Run **CMake** for celerity-runtime, with AdaptiveCPP as the SYCL implementation (there is some specific handling for that in the doc generation script). This is necessary to generate the `compile_commands.json` file used by 🥬doc.
        E.g. 
        ```bash
        cd celerity-runtime
        mkdir build
        cd build
        cmake .. -G Ninja .. -DCMAKE_PREFIX_PATH="[path to AdaptiveCpp]" -DACPP_TARGETS="cuda:sm_52" -DCMAKE_BUILD_TYPE=Release
        ```
    3. link the generated `compile_commands.json` into the root of this repository (or copy it).
        ```bash
        cd ..
        ln -s build/compile_commands.json compile_commands.json
        ```
    4. Adjust the 🥬doc configuration, by editing the `.hdoc.toml` file in the root of the celerity-runtime directory.
        - Make sure the `git_default_branch` is set to the branch/tag you are building the docs for.
        - If you changed the name or location of the `compile_commands.json` file, adjust that too.
    2. Run 🥬doc -- configuration is supplied in the `.hdoc.toml` file, and should need no changes:
        ```bash
        [path to leafy-green-doc]/build/hdoc 
        ```
    3. Run the import script to generate the docusaurus docs from the 🥬doc output:
        ```bash
        cd ..
        node scripts/import_api_docs.js
        ```
4. Install dependencies:
    ```bash
    npm install
    ```
5. Run docusaurus to build and interactively test the website:
    ```bash
    npm start
    ```
6. If everything looks good, build and publish the website:
    ```bash
    npm run build
    npm run deploy
    ```
