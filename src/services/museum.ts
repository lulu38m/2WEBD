export type ArtObject = {
    objectID: number;
    primaryImage: string;
    additionalImages: string[];
    artistDisplayName: string;
    artistDisplayBio: string;
    title: string;
    medium: string;
    objectDate: string;
    dimensions: string;
    department: string;
    creditLine: string;
    objectURL: string;
    tags: {
        term: string;
        Wikidata_URL: string;
    }[];
};

export type ListArtObject = {
    objectIDs: number[];
    total: number;
};
