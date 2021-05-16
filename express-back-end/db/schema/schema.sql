-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS property CASCADE;
DROP TABLE IF EXISTS property_loc_points CASCADE;
DROP TABLE IF EXISTS favourites CASCADE;



CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  isProfileVisible BOOLEAN
);


CREATE TABLE property (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  address VARCHAR(255) NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  city VARCHAR(225),
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  minimum_price VARCHAR(225),
  bedroomNo VARCHAR(225),
  bathroomNo VARCHAR(225),
  size VARCHAR(225),
  pets VARCHAR(225),
  furnished VARCHAR(225),
  laundry VARCHAR(255) NOT NULL,
  parking VARCHAR(225)
);




CREATE TABLE favourites(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  property_id INTEGER REFERENCES property(id) ON DELETE CASCADE
);
