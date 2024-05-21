import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { ArtObject } from "../services/museum.ts";
import { getArtByID } from "../services/museum.service.ts";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'

export default function ArtDetails() {
    const { id } = useParams();
    const [art, setArt] = useState<ArtObject | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArt = async () => {
            setLoading(true);
            const art = await getArtByID(Number(id));
            setArt(art);
            setLoading(false);
        };

        fetchArt();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-96">
                <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#f97315"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        );
    }

    return art ? <ArtDetail art={art} /> : <div>Art not found</div>;
}

function ArtDetail({ art }: { art: ArtObject }) {
    return (
        <div className="relative px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
                <div>
                    <Zoom>
                        <img src={art.primaryImage} alt={art.title} className="w-full h-96 object-cover object-center rounded-lg cursor-pointer" />
                    </Zoom>
                    <div className="flex mt-4">
                        {art.additionalImages.map((img, index) => (
                            <Zoom>
                                <img key={index} src={img} alt={`Additional view ${index + 1}`} className="w-24 h-24 object-cover object-center rounded-lg mr-2 cursor-pointer" />
                            </Zoom>
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl cursor-default">{art.title}</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{art.artistDisplayName}</p>
                    <p className="mt-2 text-lg leading-8 text-gray-600">{art.artistDisplayBio}</p>
                    <p className="mt-2 text-lg leading-8 text-gray-600">{art.medium}</p>
                    <p className="mt-2 text-lg leading-8 text-gray-600">{art.dimensions}</p>
                    <p className="mt-2 text-lg leading-8 text-gray-600">{`Department: ${art.department}`}</p>
                    <p className="mt-2 text-lg leading-8 text-gray-600">{`Credit Line: ${art.creditLine}`}</p>
                    <a href={art.objectURL} className="mt-2 text-lg leading-8 text-blue-600" target="_blank" rel="noopener noreferrer">View on Met Museum</a>
                </div>
            </div>
        </div>
    );
}
