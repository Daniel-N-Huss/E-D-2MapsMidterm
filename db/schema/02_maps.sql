DROP TABLE IF EXISTS maps CASCADE;

CREATE TABLE maps (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR (225) NOT NULL,
  thumbnail_url VARCHAR (225) NOT NULL,
  description TEXT,
  owner_id INTEGER REFERENCES users(id)
);