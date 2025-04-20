export function onbeforeunload() {
  window.onbeforeunload = function() {
    return false;
  };
}
