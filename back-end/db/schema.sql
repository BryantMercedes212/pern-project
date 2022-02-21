DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS events;

CREATE TABLE events (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    time TEXT ,
    price DECIMAL(7,2) NOT NULL,
    rating INT CHECK(rating > 0 AND rating <= 5),
    featured BOOLEAN DEFAULT false,
    image TEXT
);
