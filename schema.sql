drop table if exists entries;
create table entries (
  id integer primary key autoincrement,
  email text not null,
  job text not null,
  timestamp text not null
);
