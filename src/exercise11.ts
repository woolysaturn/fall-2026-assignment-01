import {promises as fs} from 'fs';

export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
  const log = `${statusMessage} - ${new Date().toISOString()}\n`;
  await fs.appendFile(filePath, log);
}
