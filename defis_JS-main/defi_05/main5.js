let ctext = document.getElementById('copy-text');
let ptext = document.getElementById('paste-text');
let btn = document.getElementById('button-copy');

btn.addEventListener('click', () => {
    const text = ctext.value;

    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("✅ Texte copié dans le presse-papiers !");
      })
      .catch((err) => {
        alert("❌ Erreur lors de la copie : " + err);
      });
})