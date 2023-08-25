export function PGN_string_to_dictionary(PGN: string) {
    const pgnData: { [key: string]: string | string[] } = {};
  
    const PGN_Array = PGN.trim().split('\n').map(line => line.trim());
  
    const data: string[] = [];

    for (const line of PGN_Array) {
      const match = line.match(/\[(\w+)\s+"([^"]+)"\]/);
      if (match) {
        const [, key, value] = match;
        pgnData[key] = value;
      } 
      else if (line.trim() !== "") {
          const trimLine = line.replace('...', '.')
          const moveSequences = trimLine.split(/\d+\./).filter(sequence => sequence.trim() !== "");
          
        moveSequences.forEach((sequence) => {
            const moves = sequence.trim().split(/\s+/);
            moves.forEach((move) => {
                data.push(move)
            })
        });
      }
    }
  
    pgnData["data"] = data;
  
    return pgnData;
  }
  