alter table "public"."posts" alter column "title" drop not null;
alter table "public"."posts" add column "title" text;
