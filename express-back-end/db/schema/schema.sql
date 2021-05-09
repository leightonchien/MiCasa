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


CREATE TABLE user_properties (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  address VARCHAR(255) NOT NULL,
  state BOOLEAN,
  image_url VARCHAR(255),
  isProfileVisible BOOLEAN,
  type VARCHAR(255),
  UNIQUE (user_id)
);

CREATE TABLE type1 (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  rental BOOLEAN,
  user_property_id INTEGER REFERENCES user_properties(id) ON DELETE CASCADE,
  UNIQUE (user_property_id)
);


CREATE TABLE property_loc_points (
  id SERIAL PRIMARY KEY NOT NULL,
  user_property_id INTEGER REFERENCES user_properties(id) ON DELETE CASCADE,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  UNIQUE (user_property_id)
);



CREATE TABLE users_prefrences(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  bedroomNo INTEGER NOT NULL,
  size INTEGER NOT NULL,
  UNIQUE (user_id)
);

CREATE TABLE user_searches(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  UNIQUE (user_id)
);
