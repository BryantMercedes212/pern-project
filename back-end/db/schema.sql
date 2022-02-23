DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS events;

CREATE TABLE events (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    description TEXT,
    date Text NOT NULL,
    start_time TEXT ,
    end_time TEXT ,
    price DECIMAL(7,2),
    rating DECIMAL(7,2),
    featured BOOLEAN DEFAULT false,
    image TEXT
);
