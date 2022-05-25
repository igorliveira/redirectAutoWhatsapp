CREATE DATABASE mycontacts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS contatos (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  contato VARCHAR UNIQUE
);