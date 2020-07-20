
\c db;
-- for autogenerating uuid 
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; 

-- Table: user_details

DROP TABLE IF EXISTS user_details;

CREATE TABLE user_details
(
    id uuid NOT NULL DEFAULT uuid_generate_v1(),
    display_name text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default",
    country text COLLATE pg_catalog."default",
    CONSTRAINT user_details_pkey PRIMARY KEY (id)
);