<html>

<head>

    <link rel="import" href="../../Res.html">
        <link href="./style.css" rel="stylesheet">
<script src="./script.js"></script>

</head>

<body>
        <img class="background" src="../../Media/Backgrounds/3.jpg"></img>
        <div class="layer"></div>
        <paper-material class="box" elevation="2">

            <form class="form" action="login_submit.php" method="post">
                <h1>Sign In</h1>
<br><br>

                    <paper-input label="Username" id="username" name="username" value="" maxlength="20"></paper-input>
<br>
                    <paper-input label="Password" id="password" name="password" value="" maxlength="20"></paper-input>



                    <input type="hidden" name="form_token" value="<?php echo $form_token; ?>" />
                    <paper-button raised class="sumbit_parent">Sign In<input class="sumbit_child" type="submit" value=""> </input></paper-button>

            </form>
</paper-material>
</body>

</html>