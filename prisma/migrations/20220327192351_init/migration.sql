-- CreateTable
CREATE TABLE "db_test" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "db_test_pkey" PRIMARY KEY ("id")
);
