/* ============================================================
   PICTURES
   Keep each strip's media in its own folder under pictures/.
   Each entry: { file: "name.jpg", caption: "optional text" }
   Supports images and videos ({ type: "video" }).
   ============================================================ */
function createPictureGroup(folder, items) {
  return items.map(p => ({ ...p, src: `pictures/${folder}/${p.file}` }));
}

const MEETING_PICTURES = createPictureGroup("meeting", [
  { file: "cummins_1.jpg", caption: "Pic 1" },
  { file: "cummins_2.jpg", caption: "Pic 2" },
  { file: "cummins_3.jpg", caption: "Pic 3" },
  { file: "cummins_4.jpg", caption: "Pic 4" },
  { file: "cummins_5.jpg", caption: "Pic 5" },
]);

// Add another named group when a different strip needs its own folder.
// const TEAM_PICTURES = createPictureGroup("team", [
//   { file: "team-1.jpg", caption: "" },
// ]);
