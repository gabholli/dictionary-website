export interface Definition {
    definition: string;
}

export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
}

export interface Word {
    phonetics: { audio: string }[];
    word: string;
    meanings: Meaning[];
}