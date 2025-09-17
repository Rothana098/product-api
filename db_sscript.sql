create database product_db;
use product_db;
create table product_db.products(
	id INT auto_increment primary key,
    name varchar(100) not null,
    price decimal(10, 2) not null,
    create_at timestamp default current_timestamp
);