// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var activeVidID = 0;
var select = false;

var activeCompScenePill = null;
var activeCompVidID = 0;

function selectHumanVideo(scenePill) {
    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }
    activeScenePill = scenePill;
    scenePill.classList.add("active");
    scene = scenePill.getAttribute("data-value");

    // swap video to avoid flickering
    // activeVidID = 1 - activeVidID;
    var video_active = document.getElementById("humanVideo");
    // var video_hidden = document.getElementById("compVideo" + (1 - activeVidID));
    video_active.src = "assets/videos/human/human2" + scene + ".mp4";
    video_active.load();
}

function selectCatVideo(scenePill) {
    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }
    activeScenePill = scenePill;
    scenePill.classList.add("active");
    scene = scenePill.getAttribute("data-value");

    // swap video to avoid flickering
    // activeVidID = 1 - activeVidID;
    var video_active = document.getElementById("catVideo");
    // var video_hidden = document.getElementById("compVideo" + (1 - activeVidID));
    video_active.src = "assets/videos/cat/cat2" + scene + ".mp4";
    video_active.load();
}

function selectLaptopVideo(scenePill) {
    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }
    activeScenePill = scenePill;
    scenePill.classList.add("active");
    scene = scenePill.getAttribute("data-value");

    // swap video to avoid flickering
    // activeVidID = 1 - activeVidID;
    var video_active = document.getElementById("laptopVideo");
    // var video_hidden = document.getElementById("compVideo" + (1 - activeVidID));
    video_active.src = "assets/videos/laptop/laptop2" + scene + ".mp4";
    video_active.load();
}

function selectGalleryVideo(methodPill, scenePill, modePill) {
    // Your existing logic for video selection
    select = true;

    if (activeMethodPill) {
        activeMethodPill.classList.remove("active");
    }
    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }
    if (modePill) {
        activeModePill.classList.remove("active");
        modePill.classList.add("active");
        activeModePill = modePill;
    }
    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    methodPill.classList.add("active");
    scenePill.classList.add("active");
    method = methodPill.getAttribute("data-value");
    scene = scenePill.getAttribute("data-value");
    mode = activeModePill.getAttribute("data-value");

    // swap video to avoid flickering
    activeVidID = 1 - activeVidID;
    var video_active = document.getElementById("directVideo" + activeVidID);
    var video_hidden = document.getElementById("directVideo" + (1 - activeVidID));
    video_active.src = "assets/videos/" + scene + "/" +  mode + "_" + method + ".mp4";
    video_active.load();
}


function selectCompVideo(scenePill, samplePill) {
    // Your existing logic for video selection

    if (activeCompScenePill) {
        activeCompScenePill.classList.remove("active");
    }
    if (activeCompSamplePill) {
        activeCompSamplePill.classList.remove("active");
    }
    activeCompScenePill = scenePill;
    activeCompSamplePill = samplePill;
    scenePill.classList.add("active");
    samplePill.classList.add("active");
    scene = scenePill.getAttribute("data-value");
    sample = samplePill.getAttribute("data-value");
    // console.log(scene);

    // swap video to avoid flickering
    activeCompVidID = 1 - activeCompVidID;
    var video_active = document.getElementById("compGridVideo" + activeCompVidID);
    var video_hidden = document.getElementById("compGridVideo" + (1 - activeCompVidID));
    video_active.src = "assets/videos/supp_compare/" + scene + "/compare_" + sample  + ".mp4";
    console.log(video_active.src);
    video_active.load();
}