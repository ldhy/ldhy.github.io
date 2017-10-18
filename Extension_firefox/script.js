
var phrase = [
  "Où est l'éléphant rose ?",
  "Si vous pouvez le rêver, vous pouvez le faire !",
  "J'ai décidé d'être heureux parce que c'est bon pour la santé"
];

function choix_phrase() {
  var e = phrase[
    Math.round(
      Math.random()*(phrase.length-1)
    )
  ];
  return e;
}


alert(choix_phrase());