source "https://rubygems.org"

ruby "3.2.2"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.1.0.beta1"

# Use postgresql as the database for Active Record
gem "pg"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma"

# --- Frontend / JS ---
gem "vite_rails"  # https://vite-ruby.netlify.app/guide/rails.html#tag-helpers-%F0%9F%8F%B7
gem "pagy"

# --- API ---
gem "panko_serializer" # https://panko.dev/docs/getting-started
gem "attr_json" # https://github.com/jrochkind/attr_json

# --- Jobs ---
gem "redis"
gem "sidekiq"
gem "kredis"

# --- Authentication ---
gem "bcrypt"
gem "dotenv-rails"

# --- Authorization ---
gem "pundit"

# --- Images & Files ---
gem "image_processing"
# gem 'wicked_pdf', # https://github.com/mileszs/wicked_pdf/

gem "rubocop", require: false

group :test do
  gem "capybara"
  gem "capybara-screenshot"
  gem "shoulda-matchers"
end

group :development, :test do
  gem "pry"
  gem "pry-rails"
  gem "rspec-rails"
  gem "faker"
  gem "factory_bot_rails"
  gem "debug", platforms: %i[ mri windows ]
end

group :development do
  gem "web-console"
  # gem "bullet"
  gem "error_highlight", ">= 0.4.0", platforms: [:ruby]
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ windows jruby ]
# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false


group :development do
  gem "js_from_routes"
end
