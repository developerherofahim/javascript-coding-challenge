function sanitizeLog(entry, disallowedCharacters) {
  let result = "";
  for (let char of entry) {
    if (disallowedCharacters.includes(char)) {
      result += "#";
    } else {
      result += char;
    }
  }
  return result;
}

console.log(
  sanitizeLog("WARN: Disk usage at 92%, threshold=90%", ["a", "A", "d", "e"]),
);

function cleanLogs(logs, disallowedCharacters) {
  let count = 0;
  const totalEntry = logs.length;
  const sanitizedLogs = [];
  for (let log of logs) {
    if (log.includes("$")) {
      return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
    }
    if (log.startsWith("/")) {
      count++;
    } else {
      const entryLog = sanitizeLog(log, disallowedCharacters);
      sanitizedLogs.push(entryLog);
    }
  }
  return `Total Entry Count: ${totalEntry}. Sanitized Entry Count: ${sanitizedLogs.length}. Informational Entry Count: ${count}. Finished sanitizing logs.`;
}
