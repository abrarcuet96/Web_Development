import Image from "next/image";
import nextImage from "@/assets/nextjs-logo-square.webp"

const AlbumPage = () => {
    return (
        <div>
            <h1>using Image Component</h1>
           <Image src="https://i.ibb.co/ydqS5cB/nextjs-logo-square.webp" width={500} height={500} alt="next logo"></Image> 
            <h1>using local Image</h1>
           <Image src={nextImage} width={500} height={500} alt="next logo"></Image> 
            <h1>using Image tag</h1>
           <img src="https://i.ibb.co/ydqS5cB/nextjs-logo-square.webp" width="500px" height="500px" alt="next logo"></img> 
            
        </div>
    );
};

export default AlbumPage;