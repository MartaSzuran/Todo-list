import { helper } from '@ember/component/helper';

function formatDate([date, type]) {
  const shouldDisplayDate = type === 'long';
  let formatedDate = date.toLocaleDateString();

  if (shouldDisplayDate) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    formatedDate = `${formatedDate} ${hours}:${minutes}`;
  }
  return formatedDate;
}

export default helper(formatDate);
