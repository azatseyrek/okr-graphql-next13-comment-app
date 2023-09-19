alter table "public"."posts" add column "created_at" timestamptz
 null default now();
