import {ArtObject, ListArtObject} from "./museum.ts";

const baseURL = 'https://collectionapi.metmuseum.org/public/collection/v1';

export type ApiResponse<R> = {
    count: number;
    next: string;
    previous: string;
    results: R;
};

export async function getArtObjects(): Promise<ArtObject[]> {
    const response = await fetch(`${baseURL}/objects`);
    const result = await response.json()as ListArtObject;
    const artObjects:ArtObject[] = [];
    for (const objectID of result.objectIDs.slice(0, 5)) {
        const art = await getArtByID(objectID);
        artObjects.push(art);
    }
    return artObjects;
}
export async function getArtByID(id:number): Promise<ArtObject> {
    const response = await fetch(`${baseURL}/objects/${id}`);
    return response.json();
}


export async function getHighlightObjects(): Promise<ArtObject[]> {
    const response = await fetch(`${baseURL}/search?isHighlight=true&hasImages=true&q=cat`);
    const result = await response.json()as ListArtObject;
    const artObjects:ArtObject[] = [];
    for (const objectID of result.objectIDs.slice(0, 8)) {
        const art = await getArtByID(objectID);
        artObjects.push(art);
    }
    return artObjects;
}

export async function getSearchObjects(query: string, DateBegin?: string, DateEnd?: string, geoLocation?: string, isHighlight?: boolean): Promise<ArtObject[]> {
    let url = `${baseURL}/search?hasImages=true&q=${encodeURIComponent(query)}`;
    if (DateBegin) {
        url += `&DateBegin=${DateBegin}`;
    }
    if (DateEnd) {
        url += `&DateEnd=${DateEnd}`;
    }
    if (geoLocation) {
        url += `&geoLocation=${geoLocation}`;
    }
    if (isHighlight) {
        url += `&isHighlight=true`;
    }

    const response = await fetch(url);
    const result = await response.json() as ListArtObject;
    const artObjects: ArtObject[] = [];
    for (const objectID of result.objectIDs.slice(0, 32)) {
        const art = await getArtByID(objectID);
        artObjects.push(art);
    }
    return artObjects.filter((art) => art.primaryImage !== '');
}
