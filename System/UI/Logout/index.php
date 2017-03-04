<?php
// Begin the session
session_start();

// Unset all of the session variables.
session_unset();

// Destroy the session.
session_destroy();
?>
    <html>

    <head>
        <link rel="import" href="https://reviaco.os/System/Res.html">
        <title>Logged Out</title>
    </head>

    <body>
        <h1>You are now logged out. Please come again</h1>
    </body>

    </html>