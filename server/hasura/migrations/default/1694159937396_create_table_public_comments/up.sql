CREATE TABLE "public"."comments" ("id" serial NOT NULL, "comment" text NOT NULL, "user_id" integer NOT NULL, "post_id" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON UPDATE restrict ON DELETE cascade, FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE cascade, UNIQUE ("id"));