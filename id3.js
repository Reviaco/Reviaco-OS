    function loadTags(JS/sample.mp3) {
      var tags = ID3.getAllTags(JS/sample.mp3);
      console.log(tags);
      document.getElementById('title').textContent = tags.title || "";
      document.getElementById('artist').textContent = tags.artist || "";
      document.getElementById('album').textContent = tags.album || "";
      var image = tags.picture;
      if (image) {
        var base64String = "";
        for (var i = 0; i < image.data.length; i++) {
            base64String += String.fromCharCode(image.data[i]);
        }
        var base64 = "data:" + image.format + ";base64," +
                window.btoa(base64String);
        document.getElementById('cover_art').setAttribute('src',base64);
      } else {
        document.getElementById('picture').src = "Icons/Music.png";
      }
    }
