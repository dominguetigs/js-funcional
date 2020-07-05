const getFirstElement = (arrayOrString) => arrayOrString[0];
const toLowerCase = (text) => text.toLowerCase();

new Promise((resolve) => {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
})
  .then(getFirstElement)
  .then(getFirstElement)
  .then(toLowerCase)
  .then(console.log);
