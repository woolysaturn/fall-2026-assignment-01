import fs from 'fs';
import path from 'path';

  export type SubjectScores = {[subject: string]: number;}
  export type Gradebook = {[studentName: string]: SubjectScores;}


export function calculateSubjectAverage(subject: string): number {

  const filePath = path.join(process.cwd(), 'data', 'gradebook.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const gradebook: Gradebook = JSON.parse(fileData);

  let totalScore = 0;
  let studentCount = 0;

  for(const student in gradebook){
    const scores = gradebook[student];
    if(subject in scores){
      totalScore += scores[subject];
      studentCount += 1;
    }
  }
  if(studentCount == 0){
    return 0;
  }
  else{
    return totalScore / studentCount;
  }

}
