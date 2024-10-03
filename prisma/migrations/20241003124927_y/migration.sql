/*
  Warnings:

  - A unique constraint covering the columns `[option]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Vote_option_key" ON "Vote"("option");
