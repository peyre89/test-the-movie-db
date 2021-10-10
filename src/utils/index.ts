function humanizeRuntime(runtime: number) {
  let hours: number = 0;
  let minutes: number = runtime;

  while (minutes >= 60) {
    hours++;
    minutes = minutes - 60;
  }

  const minutesWithLeadingZero: string = String(minutes).padStart(2, '0');

  const hoursFormatted: string = hours > 0 ? `${hours}h` : '';
  const minutesFormatted: string =
    minutes > 0 ? `${minutesWithLeadingZero}m` : '';

  return `${hoursFormatted} ${minutesFormatted}`.trim();
}

export { humanizeRuntime };
