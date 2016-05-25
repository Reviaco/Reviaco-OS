(function() {
  var ct, cth, ctm, d, h, m, s, setTime;
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  ct = function(v) {
    var t;
    t = v * 360 / 60;
    return t;
  };
  ctm = function(v) {
    var t;
    t = v * 360 / 60 + 6 * ct(s) / 360;
    return t;
  };
  cth = function(v) {
    var t;
    t = v * 360 / 12 + 30 * ct(m) / 360;
    return t;
  };
  setTime = function() {
    $('.minute').css('transform', 'rotate(' + ctm(m) + 'deg)');
    return $('.hour').css('transform', 'rotate(' + cth(h) + 'deg)');
  };
  $(document).ready(function() {
    return setTime();
  });
}.call(this));

//Not Required
alsolike(
  "QbqMXE", "Toggle Buttons",
  "VYRzaV", "Open Close",
  "GJpxoQ", "Simple Spinner"
);