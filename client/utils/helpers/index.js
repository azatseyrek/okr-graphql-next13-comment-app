export const formatRelativeDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();

  const elapsedMilliseconds = now - date;
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  const elapsedDays = Math.floor(elapsedHours / 24);

  if (elapsedDays > 0) {
    return `${elapsedDays} days ago`;
  } else if (elapsedHours > 0) {
    return `${elapsedHours} hours ago`;
  } else if (elapsedMinutes > 0) {
    return `${elapsedMinutes} minutes ago`;
  } else {
    return `${elapsedSeconds} seconds ago`;
  }
};
