window.onload = function () {
  const saved = localStorage.getItem('savedColor');
  if (saved === 'black' || saved === 'white') {
    changeColor(saved); // ← こっちが自動で反映してくれるよ
  }
};