CREATE TABLE "options" (
    "id" SERIAL PRIMARY KEY,
    "option_text" VARCHAR (80) NOT NULL
);

CREATE TABLE "entries" (
    "id" SERIAL PRIMARY KEY,
    "entry_text" VARCHAR NOT NULL,
    "option_id" INT NOT NULL REFERENCES "options"
);

INSERT INTO "options"
    ("option_text")
VALUES
    ('Red'),
    ('Green'),
    ('Blue'),
    ('Yellow');

SELECT "id", "option_text" FROM "options";

INSERT INTO "entries"
	("entry_text", "option_id")
VALUES
	('Do things', 1),
	('Complete stuff', 2),
	('Go there', 2),
	('Show up', 3);

SELECT "entries"."id", "entries"."entry_text" as "entryText", "options"."option_text" as "optionText"
FROM "entries"
JOIN "options" ON "options"."id" = "entries"."option_id";
