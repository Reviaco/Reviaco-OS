<?php
// Begin the session
session_start();

// Unset all of the session variables.
session_unset();

// Destroy the session.
session_destroy();

//Redirect to the login form
header("Location: https://reviaco.os/System/UI/Login/");
die();
?>
