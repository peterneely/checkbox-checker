# Generic Jasmine Sandbox

This is a Jasmine 2.2.1 sandbox that tests a Checker "class". The Checker is intended to check checkboxes on a Jira page.

## Installation & Running Tests Locally

1. Download `.zip` from Plunker:  ![screenshot](http://goo.gl/huqrRO)
2. Unzip the `.zip`; open resulting directory.
3. [Download](http://nodejs.org/download/) and install [NodeJS](http://www.nodejs.org) if it is not already present.
4. *Optional:* If you do not have Google Chrome installed, you will want to install npm package `karma-firefox-launcher` and modify the `browsers` property of `karma.conf.js` to read `'Firefox'`.
5. In your terminal, execute:

    ```shell
    $ npm install && npm test
    ```

6. Your result should appear to be many packages installing, followed by successful test output.

## Setting Up From Scratch

We will configure unit tests to be run in the browser via the test runner, [Karma](https://karma-runner.github.io).  We'll assume your tests are written for [Jasmine](https://jasmine.github.io).

1. [Download](http://nodejs.org/download/) and install [NodeJS](http://www.nodejs.org) if it is not already present.
2.  Open your terminal.  Execute:

    ```shell
    npm install -g karma-cli
    ```

    This will install the Karma executable globally.

    > *Note:* this may require `sudo`; the following calls to `npm` should **not** be run with `sudo`.

    > *Also:* NodeJS 0.12.0 was very recently released at the time of this writing, and many packages prefer, but do not require, an older version.  You may see warnings when installing various packages like this: `WARN engine karma-cli@0.0.4: wanted: {"node":"~0.8 || ~0.10"} (current: {"node":"0.12.0","npm":"2.5.1"})`

3.  Navigate to your project folder.
4.  If you already have a `package.json` file, skip this step.  Execute:

    ```shell
    $ npm init
    ```

    You will be asked a series of questions.  If you do not know the answer, simply accept the default.  This will create a `package.json` file, which you can commit to VCS.  Upon cloning of your repository, you can simply execute `npm install`, and all packages which you installed via `npm` with options `--save` or `--save-dev` will automatically be installed.
5.  Now, you will install the Karma package into your local directory, as well as some plugins.  Execute:

    ```shell
    $ npm install --save-dev karma karma-cli karma-jasmine karma-mocha-reporter
    ```

    This will install Karma proper, Karma+Jasmine integration, and a verbose command-line reporter.  It will also install `karma-cli` locally, so it can be run via `npm test` without a global `karma` installed.

6. If you wish to run your tests in Chrome, execute:

    ```shell
    $ npm install --save-dev karma-chrome-launcher
    ```

    If you wish to run your tests in Firefox, execute:

    ```shell
    $ npm install --save-dev karma-firefox-launcher
    ```

    If you wish to run your tests headlessly (executed against a ersatz browser, [PhantomJS](http://phantomjs.org)), execute:

    ```shell
    $ npm install --save-dev karma-phantomjs-launcher
    ```

7. If you already have a `karma.conf.js` file, skip this step.  Execute:

    ```shell
    $ karma init
    ```

    You will be asked another series of questions.  If you do not know the answer, simply accept the default.  This will create a `karma.conf.js` file.


8. Open `package.json` in your favorite editor.  Create a `"scripts"` property if one does not yet exist (refer to the `package.json` here for an example).  It will look like this:

    ```json
    {
      "scripts": {
        "test": "karma start"
      }
    }
    ```

9. If you did not do so via step 7, you will need to configure Karma to have properties `singleRun: true` and `autoWatch: false`.  See our `karma.conf.js` for an example.  Also, ensure all your files to be loaded are correct; you will need your files under test, your unit tests, and any 3rd-party dependencies.
10.  That should be it.  To execute your tests:

    ```shell
    $ npm test
    ```

    You may see a browser opening, but keep your eye on your terminal; the test output will be there.

Have fun!


## Manifest

- `index.html`: Just the skeleton for Jasmine.
- `hello.js`: Contains a "Hello World" function.
- `hello.spec.js`: Contains a spec for the aforementioned function.
- `karma.conf.js`: Karma configuration to run the test(s) on your local machine
- `package.json`: Lists dependencies to get Karma running.
- `.editorconfig`: If your text editor or IDE supports it, enforces basic coding style across filetypes.

## Author

[Christopher Hiller](http://boneskull.com)
