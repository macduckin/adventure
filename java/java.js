$(document).ready(function () {
  let hiddenRow = $(".expandble");
  $(".expand-btn").click(function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visible")) {
      $(".expand-btn").html("Скрыть");
    } else {
      $(".expand-btn").html("Больше");
    }
  }); //on 'click'
  $(".play-button").click(function () {
    $(".modal-canvas").toggleClass("hidden");
  });
  $(".modal-close").click(function () {
    $(".modal-canvas").toggleClass("hidden");
  });
});
