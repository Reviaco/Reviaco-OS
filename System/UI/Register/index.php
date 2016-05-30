<?php

/*** begin our session ***/
session_start();

/*** set a form token ***/
$form_token = md5( uniqid('auth', true) );

/*** set the session form token ***/
$_SESSION['form_token'] = $form_token;
?>

    <html>

    <head>

        <link rel="import" href="../../Res.html">

        <link href="./index.css" rel="stylesheet">


    </head>

    <body>
        <img class="background" src="../../Media/Backgrounds/3.jpg"></img>
        <div class="layer"></div>
        <paper-material class="box" elevation="2">

            <form class="form" action="adduser_submit.php" method="post">

        <div class="step"><h1>Add User</h1>
<br><br>

                    <paper-input label="Username" id="username" name="username" value="" maxlength="20"></paper-input>
<br>
                    <paper-input label="Password" id="password" name="password" value="" maxlength="20"></paper-input>


</div>
                

                    <input type="hidden" name="form_token" value="<?php echo $form_token; ?>" />
                    <paper-button raised class="sumbit_parent">Register<input class="sumbit_child" type="submit" value=""> </input></paper-button>

            </form>
</paper-material>
    </body>

    </html>