/*
  Warnings:

  - A unique constraint covering the columns `[page]` on the table `View` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "View_page_key" ON "View"("page");
