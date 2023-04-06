const letterPositions = function(sentence) {
  const results = {};
    for (i = 0; i < sentence.length; i++) {
      if (sentence[i] === ' ');
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
      if (results[sentence[i]] && !results[sentence[i]].includes(i)) {
        results[sentence[i]].push(i);
      }
      console.log(results);
    }
  return results;
};




letterPositions("hello");