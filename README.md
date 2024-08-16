# dropdown_ids

## What
An example repo, showing how to populate a dropdown menu with options from a database.  Then send the id of the chosen object in a POST call.

## Why
This is a really common thing people wan't to do.

## How

### Setup

- Open terminal and run `npm install`.
- Make a postgress database called `dropdown_ids`.
- Run the SQL statements from the `database.sql` to set up and populate the database tables.

### Running it

- In a terminal, run `npm run server`.
- In another terminal run `npm run client`.
- Open `localhost:5173` in Chrome.
