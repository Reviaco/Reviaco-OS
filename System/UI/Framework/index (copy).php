
    <html>
    <head>
        <link rel="import" href="../../Res.html">


    </head>

    <body>
        
        
    <style>
        .modal {
        width: 100px;
        }
        </style>

<paper-button raised onclick="modal.open()">modal dialog</paper-button>



<paper-dialog id="modal" modal>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <div class="buttons">
          <paper-button dialog-confirm>Cancel</paper-button>
    <paper-button dialog-confirm autofocus>Install</paper-button>
  </div>
</paper-dialog>


    </body>

</html>