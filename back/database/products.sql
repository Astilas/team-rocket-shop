CREATE TABLE IF NOT EXISTS products (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  pokemon_name VARCHAR(50),
  image VARCHAR(255),
  type VARCHAR(50)
);