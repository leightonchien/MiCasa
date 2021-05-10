-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS user_properties CASCADE;
DROP TABLE IF EXISTS type1 CASCADE;
DROP TABLE IF EXISTS property_loc_points CASCADE;
DROP TABLE IF EXISTS users_prefrences CASCADE;
DROP TABLE IF EXISTS user_searches CASCADE;



CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  isProfileVisible BOOLEAN
);


CREATE TABLE property (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  address VARCHAR(255) NOT NULL,
  img_url VARCHAR(255),
  isProfileVisible BOOLEAN,
  city VARCHAR(225),
);


CREATE TABLE property_loc_points (
  id SERIAL PRIMARY KEY NOT NULL,
  property_id INTEGER REFERENCES user_properties(id) ON DELETE CASCADE,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);



CREATE TABLE prefrences(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  bedroomNo INTEGER NOT NULL,
  size INTEGER NOT NULL
);


CREATE TABLE favourites(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  property_id INTEGER REFERENCES property(id) ON DELETE 
);
