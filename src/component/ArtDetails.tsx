import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { ArtObject } from "../services/museum.ts";
import { getArtByID } from "../services/museum.service.ts";

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

function ArtDetail(props: { art: ArtObject }) {
    return (
        <div className="relative px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
                <div>
                    <img src={props.art.primaryImage} alt={props.art.title} className="w-full h-96 object-cover object-center rounded-lg" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl cursor-default">{props.art.title}</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{props.art.artistDisplayName}</p>
                    <p className="mt-2 text-lg leading-8 text-gray-600">{props.art.objectDate}</p>
                </div>
            </div>
        </div>
    );
}
