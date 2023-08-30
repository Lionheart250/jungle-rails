# Jungle

**Jungle** is a mini e-commerce application built with Rails 6.1. It serves as an example-driven teaching tool for Rails.

## Setup

Follow these steps to set up and run the project on your local machine:

1. Run `bundle install` to install dependencies
2. Create `config/database.yml` by copying `config/database.example.yml`
3. Create `config/secrets.yml` by copying `config/secrets.example.yml`
4. Run `bin/rails db:reset` to create, load, and seed the database
5. Create a `.env` file based on `.env.example`
6. Sign up for a Stripe account
7. Put your Stripe (test) keys into the appropriate `.env` variables
8. Run `bin/rails s -b 0.0.0.0` to start the server

## Database

If you encounter authentication issues with the database:

- Uncomment the `user` and `password` fields in `config/database.yml` in the development and test sections.
- Replace `user` and `password` under `development` with an existing database user if necessary.

## Stripe Testing

For successful payment testing, use Credit Card # 4111 1111 1111 1111.

For more details, refer to the [Stripe testing documentation](https://stripe.com/docs/testing#cards).

## Dependencies

- Rails 6.1 [Rails Guide](http://guides.rubyonrails.org/v6.1/)
- Bootstrap 5
- PostgreSQL 9.x
- Stripe

## Screenshots

Here are some screenshots showcasing the application's features:

1. **Screenshot 1: 
   ![Homepage](/Users/jack/lighthouse/jungle-rails/docs/Screen Shot 2023-08-30 at 10.01.28 AM.png)

2. **Screenshot 2: 
   ![User Profile](/Users/jack/lighthouse/jungle-rails/docs/Screen Shot 2023-08-30 at 10.01.35 AM.png)

3. **Screenshot 3: 
   ![Settings](/Users/jack/lighthouse/jungle-rails/docs/Screen Shot 2023-08-30 at 10.01.45 AM.png)

4. **Screenshot 4: 
   ![Search](/Users/jack/lighthouse/jungle-rails/docs/Screen Shot 2023-08-30 at 10.02.11 AM.png)

5. **Screenshot 5: 
   ![Data Visualization](/Users/jack/lighthouse/jungle-rails/docs/Screen Shot 2023-08-30 at 10.02.22 AM.png)

6. **Screenshot 6: 
   ![Mobile View](/Users/jack/lighthouse/jungle-rails/docs/Screen Shot 2023-08-30 at 10.02.32 AM.png)

7. **Screenshot 7: 
   ![Notifications](/Users/jack/lighthouse/jungle-rails/docs/Screen Shot 2023-08-30 at 10.03.57 AM.png)