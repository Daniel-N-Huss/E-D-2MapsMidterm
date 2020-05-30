DROP TABLE IF EXISTS pins CASCADE;

CREATE TABLE pins (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR (225) NOT NULL,
  thumbnail_url VARCHAR(225),
  description TEXT,
  geo_location VARCHAR(225),
  map_id INTEGER REFERENCES maps(id)
);
