let content = document.getElementById("content");
let artistBtn = document.getElementById("artist-btn");

artistBtn.onclick = function() {
getArtists().then(response => {
    console.log(response);
    content.textContent = response;
});
};

async function getArtists() {
    let response = await fetch('http://localhost:4500/getartists');
    let data = await response.text();
    return data;
}

let deleteInput = document.getElementById("del-id");
let deleteBtn = document.getElementById("delete-btn");
let delText = document.getElementById("content-1");
let updateArtistBtn = document.getElementById("update-artist-btn");
let updateArtistId = document.getElementById("update-id");
let updateArtistInput = document.getElementById("update-artist-input");


deleteBtn.onclick = function() {
    deleteArtist().then(response => {
        console.log(response);
        delText.textContent = response;
    });
};

async function deleteArtist() {
    let idValue = deleteInput.value;
    let response = await fetch(`http://localhost:4500/deleteartist${idValue}`);
    let data = await response.text();
    return data;
}

updateArtistBtn.onclick = function() {
    updateArtist().then(response => {
        console.log(response);
        let updateText = document.getElementById("content-1");
        updateText.textContent = response;
    })
}

async function updateArtist() {
    let idValue = updateArtistId.value;
    let inputValue = updateArtistInput.value;
    let response = await fetch(`http://localhost:4500/updateartist${idValue}/${inputValue}`);
    let data = await response.text();
    return data;
}

let artistNameInput = document.getElementById("add-artist-name");
let artistOriginInput = document.getElementById("add-artist-origin");
let addArtistBtn = document.getElementById("add-artist-btn");

addArtistBtn.onclick = function() {
    addArtist().then(response => {
        console.log(response);
        let addText = document.getElementById("content-1");
        addText.textContent = response;
    });
};

async function addArtist() {
    let nameValue = artistNameInput.value;
    let originValue = artistOriginInput.value;
    let response = await fetch(`http://localhost:4500/addartist?artist_name=${nameValue}&artist_origin=${originValue}`);
    let data = await response.text();
    return data;
}


//ALBUM CODES

let albumBtn = document.getElementById("album-btn");
let albumCont = document.getElementById("album-content");

albumBtn.onclick = function() {
    getAlbum().then(response => {
        console.log(response);
        albumCont.textContent = response;
    });
    };
    
async function getAlbum() {
        let response = await fetch('http://localhost:4500/getalbums');
        let data = await response.text();
        return data;
};

let delAlbumBtn = document.getElementById("delete-album-btn");
let delAlbumId = document.getElementById("del-album-id");

delAlbumBtn.onclick = function() {
    delAlbum().then(response => {
        console.log(response);
        let delContent = document.getElementById("content-2");
        delContent.textContent = response;
    });
};
    
async function delAlbum() {
        let albumValue = delAlbumId.value;
        let response = await fetch(`http://localhost:4500/deletealbum${albumValue}`);
        let data = await response.text();
        return data;
};

let updateAlBtn = document.getElementById("update-album-btn");
let updateAlId = document.getElementById("update-album-id");
let updateAlGenre = document.getElementById("update-album-genre");

updateAlBtn.onclick = function() {
    updateAlbum().then(response => {
        console.log(response);
        let updateCont = document.getElementById("content-2");
        updateCont.textContent = response;
    });
};
    
async function updateAlbum() {
        let albumValueId = updateAlId.value;
        let albumValueGenre = updateAlGenre.value;
        let response = await fetch(`http://localhost:4500/updatealbum${albumValueId}/${albumValueGenre}`);
        let data = await response.text();
        return data;
};

let addAlBtn = document.getElementById("add-album-btn");
let addAlName = document.getElementById("add-album-name");
let addAlGenre = document.getElementById("add-album-genre");
let addAlRecCompany = document.getElementById("add-album-recordcompany");
let addArtistId = document.getElementById("add-artist-id");

addAlBtn.onclick = function() {
    addAlbum().then(response => {
        console.log(response);
        let addCont = document.getElementById("content-2");
        addCont.textContent = response;
    });
};
    
async function addAlbum() {
        let addAlbumName = addAlName.value;
        let addAlbumGenre = addAlGenre.value;
        let addAlbumRecComp = addAlRecCompany.value;
        let albumIdValue = addArtistId.value;
        let response = await fetch(`http://localhost:4500/addalbum?album_name=${addAlbumName}&genre=${addAlbumGenre}&record_company=${addAlbumRecComp}&Artist_id=${albumIdValue}`);
        let data = await response.text();
        return data;
};

// SONGS CODES

let selectSongBtn = document.getElementById("song-btn");
let selectCont = document.getElementById("song-content");

selectSongBtn.onclick = function() {
    getSongs().then(response => {
        console.log(response);
        selectCont.textContent = response;
    });
};

async function getSongs() {
    let response = await fetch('http://localhost:4500/getsongs');
    let data = await response.text();
    return data;
}

let deleteSongBtn = document.getElementById("delete-song-btn");
let deleteId = document.getElementById("del-song-id");

deleteSongBtn.onclick = function() {
    delSong().then(response => {
        console.log(response);
        let delContent = document.getElementById("content-3");
        delContent.textContent = response;
    });
};
    
async function delSong() {
        let songValue = deleteId.value;
        let response = await fetch(`http://localhost:4500/delete${songValue}`);
        let data = await response.text();
        return data;
};

let updateSongBtn = document.getElementById("update-song-btn");
let updateSongId = document.getElementById("update-song-id");
let updateSongTitle = document.getElementById("update-song-title");

updateSongBtn.onclick = function() {
    updateSong().then(response => {
        console.log(response);
        let updateCont = document.getElementById("content-3");
        updateCont.textContent = response;
    });
};
    
async function updateSong() {
        let songIdValue = updateSongId.value;
        let songTitleValue = updateSongTitle.value;
        let response = await fetch(`http://localhost:4500/updatesong${songIdValue}/${songTitleValue}`);
        let data = await response.text();
        return data;
};

let addSongBtn = document.getElementById("add-song-btn");
let addSongTitle = document.getElementById("add-song-title");
let addSongYear = document.getElementById("add-release-date");
let addSongAlbumId = document.getElementById("add-album-chart-id");

addSongBtn.onclick = function() {
    addSong().then(response => {
        console.log(response);
        let addCont = document.getElementById("content-3");
        addCont.textContent = response;
    });
};
    
async function addSong() {
        let addTitleValue = addSongTitle.value;
        let addYearValue = addSongYear.value;
        let addAlIdValue = addSongAlbumId.value;
        let response = await fetch(`http://localhost:4500/addsong?song_title=${addTitleValue}&release_date=${addYearValue}&Album_Chart_id=${addAlIdValue}`);
        let data = await response.text();
        return data;
};