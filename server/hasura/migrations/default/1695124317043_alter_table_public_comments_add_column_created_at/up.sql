alter table "public"."comments" add column "created_at" timestamptz
 null default now();
