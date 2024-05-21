export type ArtObject = {
    objectID: number;
    isHighlight: boolean;
    primaryImage: string;
    title: string;
    artistDisplayName: string;
    objectDate: string;
    primaryImageSmall: string;
};

export type ListArtObject = {
    objectIDs: number[];
    total: number;
};


