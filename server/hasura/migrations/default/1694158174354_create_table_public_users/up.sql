CREATE TABLE "public"."users" ("id" serial NOT NULL, "email" text NOT NULL, "fullName" text NOT NULL, "password" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));
