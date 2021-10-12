/**
 * Method to convert the duration of a movie into something easier to read.
 */
function humanizeRuntime(runtime: number) {
  const ONE_HOUR = 60;

  const hours = Math.floor(runtime / ONE_HOUR);
  const minutes = runtime % ONE_HOUR;

  const minutesFormatted = String(minutes).padStart(2, '0');

  const h = hours > 0 ? `${hours}h` : '';
  const m = minutes > 0 ? `${minutesFormatted}min` : '';

  return `${h} ${m}`.trim();
}

export { humanizeRuntime };
