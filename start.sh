#!/bin/sh

gem update --system
bundle install --path vendor/bundle
bundle exec jekyll serve

