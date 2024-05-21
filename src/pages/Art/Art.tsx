import Footer from "../../component/Foooter.tsx";
import ArtDetails from "../../component/ArtDetails.tsx";

export default function Art() {
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 lg:px-8">
                <div className="lg:pt-56">
                    <div className="relative left-[calc(50%-20rem)] top-[-14rem] aspect-[1155/678] w-[20rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white to-orange-500 opacity-30 sm:left-[calc(50%-40rem)] sm:top-[-14rem] sm:w-[45rem] z-10 clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
                    <div className="relative text-center top-[-25rem] z-20">
                    <ArtDetails />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
