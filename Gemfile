source "https://rubygems.org"

gem "minima", "~> 2.0"

gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo"
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.0", :install_if => Gem.win_platform?

gem "kramdown-parser-gfm"

# bundle exec jekyll serve fails wanting this
gem 'webrick'