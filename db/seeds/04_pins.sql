INSERT INTO pins (title, thumbnail_url, description, geo_location, map_id) VALUES ('Heat', 'https://www.master.ca/sn_uploads/fck/heating_history.jpg', 'really hot', '{lat: -34.397, lng: 150.644}', 1);
INSERT INTO pins (title, thumbnail_url, description, geo_location, map_id) VALUES ('Revolver Coffee', 'https://i.imgur.com/Q1pA96P.jpg', 'Best coffee in Gastown', '{lat: 49.283158, lng: 123.109305}', 2);
INSERT INTO pins (title, thumbnail_url, description, geo_location, map_id) VALUES ('Bakery Brewing', 'https://bccraftbeer.com/app/uploads/2019/05/69200421_2357393507689670_5300398940762406912_o.jpg', 'Barrel-aged beer brewed in Port Moody B.C.', '{lat: 49.278991, lng: -122.853245}', 3);



-- CREATE TABLE pins (
--   id SERIAL PRIMARY KEY NOT NULL,
--   title VARCHAR (225) NOT NULL,
--   thumbnail_url VARCHAR(225),
--   description TEXT,
--   geo_location VARCHAR(225),
--   map_id INTEGER REFERENCES maps(id)
-- );
