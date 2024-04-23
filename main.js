$(document).ready(function () {
  $("#toCopy").click(function () {
    const value = $("#outPut").val();
    navigator.clipboard.writeText(value);
  });

  $("#inputSlider").on("input", function () {
    const valueOfSlider = $("#inputSlider").val();
    $("#Number").text(valueOfSlider);
  });

  function passWord(length) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var symbolsVal = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
    var numbers = "0123456789";

    var myString = "";

    if ($("#upercase").is(":checked")) {
      myString += upper;
    }
    if ($("#lowercase").is(":checked")) {
      myString += lower;
    }
    if ($("#symbol").is(":checked")) {
      myString += symbolsVal;
    }
    if ($("#includedNumber").is(":checked")) {
      myString += numbers;
    }

    var returnPass = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * myString.length);
      returnPass += myString.charAt(randomIndex);
    }
    return returnPass;
  }

  $("#generate").click(function () {
    const length = $("#inputSlider").val();
    const generatedPassword = passWord(length);
    $("#outPut").val(generatedPassword);
  });

  const defaultLenght = $("#inputSlider").val();
  const defaultPassWord = passWord(defaultLenght);
  $("#outPut").val(defaultPassWord);
  $("#Number").text(defaultLenght);
});
