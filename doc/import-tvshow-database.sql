CREATE TABLE tvshow
(
    id SERIAL,
    title VARCHAR(100),
    synopsis TEXT,
    release_date DATE
);

INSERT INTO tvshow (title, synopsis, release_date)
VALUES ('The flash', 'Un gars qui semble avoir oublié ses clés chez lui', '2017-11-16'),
       ('The 100', 'Déléguer l''avenir de l''humanité à des ados', '2017-11-16');