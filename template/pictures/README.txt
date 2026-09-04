PICTURES FOLDER
===============

Put your photos and videos in THIS folder, then list them in js/pictures.js.

How to add media
----------------
1. Copy your files here, e.g.:
     pictures/photo-1.jpg
     pictures/clip-1.mp4

2. Open js/pictures.js and add one entry per file inside the PICTURES array:

     const PICTURES = [
       { file: "photo-1.jpg", caption: "Team offsite" },
       { file: "photo-2.jpg", caption: "", position: "center 5%" },
       { file: "clip-1.mp4",  caption: "Demo", type: "video" },
     ];

Entry options
-------------
- file      (required) filename as it appears in this folder.
- caption   (optional) small text shown under the image.
- type      (optional) set to "video" for .mp4 clips; omit for images.
- position  (optional) CSS object-position to reframe a crop, e.g. "center 5%".

Tips
----
- Supported: images (.jpg/.png/.webp/.gif) and video (.mp4).
- Filenames are case-sensitive on some servers; match them exactly.
- Keep files reasonably small so the page loads fast.
- Logo images and screenshots go in the assets/ folder instead.
