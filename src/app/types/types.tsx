export interface Definition {
    definition: string;
    [key: string]: any;
}

export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    [key: string]: any;
}

export interface Word {
    word: string;
    meanings: Meaning[];
    [key: string]: any;
}