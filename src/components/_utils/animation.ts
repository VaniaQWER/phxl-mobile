export function scrollTop (position: number, timeout: number, container: any) {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
  direction = position - scrollTop > 0 ? 1 : -1,
  distance = Math.abs(position - scrollTop),
  split = distance / 50,
  _timeout: any;

  if (position !== scrollTop) {
    timeout = timeout || 1000;
    split *= direction;

    _timeout = setInterval(function () {
        scrollTop += split;
        distance -= Math.abs(split);
        if (0 >= distance) {
          container.scrollTo(0, position);
            clearInterval(_timeout);
            _timeout = null;
        } else {
          container.scrollTo(0, scrollTop);
        }
    }, timeout / 100);
  }
}