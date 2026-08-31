// custom error class
export class InvalidNucleotideError extends Error{
  constructor(invalidChar: string){
    //passing messgae to base error class
    super('Invalid DNA nucleotide found: ${invalidChar}');
    //error name
    this.name = "InvalidNucleotideError";
  }
}
// this makes the custom error to be thrown

export function transcribeDNA(dna: string): string {

  let result = "";

  for (const charr of dna){
    if(charr == 'A'){
      result += 'U';
    }

    else if(charr == 'T'){
      result += 'A';
    }

    else if(charr == 'C'){
      result += 'G';
    }

    else if(charr == 'G'){
      result += 'C';
    }

    else {
      throw new InvalidNucleotideError('Invalid Dna nucleotide: ${charr}');
    }
  }

  return result;

}
