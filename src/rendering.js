const renderRow = arr => `<div class="square">${arr.join('</div><div class="square">')}</div>`;

const renderRows = arr => arr.reduce((acc, current) => acc + renderRow(current), '');

export default function renderGame(shuffledArray, domNode = document.getElementById('app')) {
  const rows = renderRows(shuffledArray).replace(
    '<div class="square"></div>',
    '<div class="square empty"></div>',
  );
  domNode.innerHTML = rows;

  return true;
}
