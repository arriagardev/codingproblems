function wave(str){
    const letters = str.split('');
    const wave = [];
    letters.forEach((l, i) => {
      if(l !== ' ') {
        const word = letters.map((ltr, idx) => idx === i ? ltr.toUpperCase() : ltr);
        wave.push(word.join('')); 
      }    
    });
    return wave;
  }