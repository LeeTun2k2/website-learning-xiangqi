export function PGN_string_to_dictionary(PGN: string) {
    const pgnData: { [key: string]: string | string[] } = {};
    const PGN_Array = PGN.trim().split('\n').map(line => line.trim());
    const moves: string[] = [];

    for (const line of PGN_Array) {
      const match = line.match(/\[(\w+)\s+"([^"]+)"\]/);
      if (match) {
        const [, key, value] = match;
        pgnData[key] = value;
      } 
      else if (line.trim() !== "") {
          const m = line.trim().split(" ");
          for (const _ of m) {
              moves.push(_);
          }
      }
    }
    moves.pop();
    pgnData["moves"] = moves;
    return pgnData;
  }

  