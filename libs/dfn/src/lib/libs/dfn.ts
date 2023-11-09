export function humanizeDate(): string {
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();

  const newdate = year + '/' + month + '/' + day;
  return newdate;
}
