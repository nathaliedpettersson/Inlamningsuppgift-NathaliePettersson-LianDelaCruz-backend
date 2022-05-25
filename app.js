const { response } = require('express');
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors({
    origin : 'http://127.0.0.1:5500'
}));

app.listen('4500', () => {
    console.info('Server started on port 4500');
});

const musicDb = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ZeppaBurgersson',
    database : 'musicdb'
}); 

// Connect MySQL
musicDb.connect((err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    console.log('MySQL is connected.');
});

// ARTIST TABLE

// Insert new artist into artist table
// How to insert with browser - localhost:4500/addartist?artist_name=name&artist_origin=country
app.get('/addartist', (request, response) => {
    let addArtistToSql = 'INSERT INTO Artist VALUES (DEFAULT, "' + 
    request.query.artist_name + '", "' + 
    request.query.artist_origin + '")';
    musicDb.query(addArtistToSql, (error, result) => {
        if (error) throw error;
        console.log(result);
        response.send('New artist added.')
    });
});

// Delete artist from table
// How to delete with browser - localhost:4500/deleteartist#
app.get('/deleteartist:id', (request, response) => {
    let deleteArtistFromSql = 'DELETE FROM Artist WHERE id = '+ request.params.id + ';';
    musicDb.query(deleteArtistFromSql, (error, result) => {
        if (error) throw error;
        console.log(result);
        response.send('You deleted one of the artists.')
    });
});

app.get('/deleteartist:id', (request, response) => {
    let deleteArtistFromSql = 'DELETE FROM Artist WHERE id = '+ request.params.id + ';';
    musicDb.query(deleteArtistFromSql, (error, result) => {
        if (error) throw error;
        console.log(result);
        response.send('You deleted one of the artists.')
    });
});

// Update name of artist
// How to update artists name with browser - localhost:4500/updateartist#/newname
app.get('/updateartist:id/:newname', (request, response) => {
    let updateArtistInSql = 'UPDATE Artist SET artist_name = "' + request.params.newname + '" WHERE id = '+ request.params.id + ';';
    musicDb.query(updateArtistInSql, (error, result) => {
        if (error) throw error;
        console.log(result);
        response.send('You changed the name of an artist.')
    });
});

// Show all artists in table
// How to get the whole table of artists with browser - localhost:4500/getartists
app.get('/getartists', (request, response) => {
    let getArtistTable = 'SELECT * FROM Artist;';
    musicDb.query(getArtistTable, (error, result) => {
        if (error) throw error;
        console.log(result);
        response.send(result);
    });
});

/* ----------------------------------------------- */

// ALBUM TABLE

// Parameters - id, album_name, genre, record_company, Artist_id
app.get('/addalbum', (request, response) => {
    let addAlbumToSql = 'INSERT INTO Album_Chart VALUES (DEFAULT, "' + request.query.album_name + '", "' + request.query.genre + '", "' + request.query.record_company + '", ' + request.query.Artist_id + ');'; 
    musicDb.query(addAlbumToSql, (error, result) => {
        if (error) throw error;
        console.log(result);
        response.send('You added a new album to your collection!')
    });
});


app.get('/deletealbum:id', (request, response) => {  
    let deleteAlbumFromSql = 'DELETE FROM Album_Chart WHERE id = '+ request.params.id + ';';
    musicDb.query(deleteAlbumFromSql, (error, result) => {
        if (error) throw error;
        console.log(result);
        response.send('You deleted one of your albums.')
    });
});


app.get('/updatealbum:id/:genre', (request, response) => { 
    let updateAlbumGenreFromSql = 'UPDATE Album_Chart SET genre = "' + request.params.genre + '" WHERE id = '+ request.params.id + ';';
    musicDb.query(updateAlbumGenreFromSql, (error, result) => {
        if (error) throw error;
        console.log(result);
        response.send('You decided to change genre of an album.')
    });
});

app.get('/getalbums', (request, response) => {
    let getAlbumsFromSql = 'SELECT * FROM Album_Chart;';
    musicDb.query(getAlbumsFromSql, (error, result) => {
        if (error) throw error;
        console.log(result);
        response.send(result);
    });
});

/* -------------------------------------------- */

// SONGS TABLE

// Parameters - id, song_title, release_date, Album_Chart_id
app.get('/addsong', (request, response) => {
    let addSongToSql = 'INSERT INTO Songs VALUES (DEFAULT, "' + request.query.song_title + '", ' + request.query.release_date + ', ' + request.query.Album_Chart_id + ');';
    musicDb.query(addSongToSql, (error, result) => {
        if (error) throw error;
        console.log(result);
        response.send('You added a new song!')
    });
});


app.get('/delete:id', (request, response) => {  
    let deleteSongFromSql = 'DELETE FROM Songs WHERE id = '+ request.params.id + ';';
    musicDb.query(deleteSongFromSql, (error, result) => {
        if (error) throw error;
        console.log(result);
        response.send('You deleted one of your songs.')
    });
});


app.get('/updatesong:id/:newtitle', (request, response) => { 
    let updateSongFromSql = 'UPDATE Songs SET song_title = "' + request.params.newtitle + '" WHERE id = '+ request.params.id + ';';
    musicDb.query(updateSongFromSql, (error, result) => {
        if (error) throw error;
        console.log(result);
        response.send('You have updated the name of a song.')
    });
});

app.get('/getsongs', (request, response) => {
    let getSongsFromSql = 'SELECT * FROM Songs;';
    musicDb.query(getSongsFromSql, (error, result) => {
        if (error) throw error;
        console.log(result);
        response.send(result);
    });
});
