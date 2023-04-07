# Architolk

Architolk docs made with [Jekyll](https://jekyllrb.com/)

## Setup

This site runs on Jekyll, an opensource static site generating platform.

- Clone or download a zip of this project to your computer and navigate to the
  project directory in your terminal

- Make sure Ruby is installed, to check if it is, run:
  ```
  ruby -v
  ```
  For more information about installing Ruby, refer to the [Ruby installation ](https://www.ruby-lang.org/en/documentation/installation/).

- Install the Jekyll and bundler [gems](https://jekyllrb.com/docs/ruby-101/#gems) from the commandline:
  ```
  gem install jekyll bundler
  ```
  For more information about installing Jekyll, refer to the [Jekyll quickstart guide](https://jekyllrb.com/docs/quickstart/)

- Some problems may occur if the bundler gem file is updated, but the Gemfile.lock still contains a reference to the old version. This can be solved by:
  ```
  bundle update --bundler
  ```
  Sometimes other gem packages also need to be updated: see the Gemfile for possible updates (like: `bundle update github-pages`).

- Install Gem dependencies for the project by running:
  ```
  bundle install
  ```

- To run the server in your local environment run:
  ```
  bundle exec jekyll serve
  ```

- Go to http://localhost:4000/ in your browser

## Github.io native operation

Nothing is needed! Just make changes to the source, and everything will be published.

The only reason to use a local server and a local build is for testing, it is not necessary for publication on github.io.
