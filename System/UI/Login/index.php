<html>

<head>

    <link rel="import" href="../../Res.html">
    <script src="https://fb.me/react-0.13.3.min.js"></script>
    <style>
        body {}
        
        .box {
            position: fixed;
            top: 20%;
            left: 20%;
            height: 60%;
            width: 60%;
            background-color: #ffffff;
            z-index: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
        }
        
        .form {
            position: relative;
        }
        
        h1 {
            color: blue;
            margin: 20px;
            font-size: 50px;
            font-family: Roboto;
            font-weight: thin;
        }
        
        form {
            margin: 20px;
            position: relative;
            height: 100%;
        }
        
        .sumbit {
            position: absolute;
            right: 10%;
            bottom: 20%;
        }
        
        .background {
            position: fixed;
            z-index: 99999999999999999999999999999999999999999999999999;
            width: 100% height: 100%;
            left: 0px;
            top: 0px;
            -webkit-filter: grayscale(100%);
        }
        
        .background1 {
            position: fixed;
            z-index: 999999999999999999999999999999999999999999999999999999999;
            background-color: blue;
            opacity: 0.5;
            width: 100%;
            height: 100%;
            left: 0px;
            top: 0px;
        }
        
        .paper-input-container-0 .focused-line.paper-input-container {
            Background: #e91e63;
        }
    </style>
    <title>PHPRO Login</title>
</head>

<body>
    <img class="background" src="Images/Covers/2.png"></img>
    <div class="background1"></div>
    <div class="box">

        <form class="form" action="login_submit.php" method="post">
            <h1>Sign in</h1>
            <p>

                <paper-input label="Username" id="username" name="username" value="" maxlength="20"></paper-input>
            </p>
            <p>
                <paper-input label="Password" id="password" name="password" value="" maxlength="20"></paper-input>
            </p>
            <p>
                <input type="hidden" name="form_token" value="<?php echo $form_token; ?>" />
                <input class="sumbit" type="submit" value="&rarr; Login"> </input>
            </p>
        </form>
    </div>
</body>

</html>