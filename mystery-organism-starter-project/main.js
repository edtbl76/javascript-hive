// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single starnd of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


// Factory function
const pAequorFactory = (specimenId, dna) => {
  return {
    specimenId: specimenId,
    dna: dna,
    mutate() {
      const randomIndex = Math.floor(Math.random * this.dna.length); 
      let newBase = returnRandBase();
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    }, 
    compareDNA(newPAequor) {
      // reduce(accumulator, current value, index, passed_array)
      const sharedDNA = this.dna.reduce((acc, curr, idx, arr) => {
        return (acc[idx] === newPAequor.dna[idx]) ? acc + 1 : acc;
      }, 0);
      const percentageShared = (sharedDNA / this.dna.length) * 100;
      console.log(`${this.specimenId} and ${newPAequor.specimenId} have ${percentageShared.toFixed(2)}% DNA in common.`);
    }, 
    willLikelySurvive() {
      let countCG = this.dna.filter(base => base === 'C' || base === 'G');
      return (countCG.length / this.dna.length) >= 0.6
    }
  }
}




// Drivah
const survivingSpecimens = [];
let counter = 1;

while (survivingSpecimens.length < 30) {
  let newPAequor = pAequorFactory(counter, mockUpStrand());
  if (newPAequor.willLikelySurvive()) {
    survivingSpecimens.push(newPAequor);
  }
  counter++;
}

console.log(survivingSpecimens)


