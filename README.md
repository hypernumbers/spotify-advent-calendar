Hack Your Own Spofity Advent Calendar
=====================================

This is an Advent Calendar that runs inside Spotify.

Installation Instructions
-------------------------

On *Windows* create a directory called ``spotify`` in ``My Documents``
On *Linux* create a directory called ``Spotify`` in your home directory ``~``
On *Mac* create a directory called ``Spotify`` in your home directory ``~``

[Download](https://github.com/hypernumbers/spotify-advent-calendar/downloads) the app and unzip it into the ``spotify`` directory (it should be a full directory ``spotify-advent-calendar`` in the ``spotify`` directory)

[Sign up](https://developer.spotify.com/technologies/apps/) as a Spotify Developer (I know, I am trying to get it into the apps store, but I have left it a bit bloody late).

Load the advent calendar in the search bar by typing in ``spotify:app:advent``

Why Do I Have To Install It As A Dev And Not Via The Spotify App Panel?
-----------------------------------------------------------------------

Anyone can install an app, silly. Try and hack one...

Blood-curdling Legal Threats
----------------------------

This code contains a top-secret algorithm that determines which door you can open and when - which is protected by patents pending, wending and heart-rending, and some battalion of lawyers. If you discover yourself infringing on my IP hacking this advent callender you should quickly blind yourself to avoid the legal apocalypse. Approved techniques ar the pluck out, the poke out and the stub out...

Xmas License
------------

The Xmas License is a BSD-flavoured DWTFYW license. Do what the fuck you want but send a copy of your Advent Calendar to gordon@vixo.com. If you don't, a Xmas Pixie dies is all. no pressure.

Hacking Quick Tips
------------------

The name of the app (which is what you search from in the search bar (``spotify:app:advent``) is a field in the ``manifest.json``: ``"BundleIdentifier": "advent"`
`

If you change the app name you will need to change it in all the spotify resource requests like: ``sp://advent/img/snowflakes.jpg`` in ``advent.css`` and ``sp://advent/s/music.js`` in ``index.html``

The picture is specified in the first rule of ``advent.css`` - so to change it just save a new ``picture.jpg`` in ``./img/``

The music is in ``/js/music.js``. The naughty song is the song played if your try and open a door early. At the moment it is the *Cage Against The Machine Version* of John Cage's *4'33"* (spotify:track:07aUR8QqhFOObXHRYLZ74n). You might want to change it to something else, like the original version of *4'33"* (spotify:track:5hut6G6aDUbvEj5klarYWP).

Blah-Blah
---------

[https://github.com/hypernumbers/spotify-advent-calendar](Fork me) on GitHub or tweet me @gordonguthrie

Merry Xmas and Happy Spotify Hacking!