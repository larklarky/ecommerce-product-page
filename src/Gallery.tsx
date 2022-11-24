import styles from './styles/Gallery.module.css';
import {Image} from './App';
import { GalleryModal } from './GalleryModal';
import { useState } from 'react';

type GalleryProps = {
    images: Image[];
}

export const Gallery = ({images}: GalleryProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [fullscreen, setFullscreen] = useState<boolean>(true);

    const handleClose = () => {
        setFullscreen(false)
    }

    return(
        <>
            {fullscreen ? <GalleryModal images={images} index={activeIndex} handleClose={() => handleClose()}/> : ''}
            <div className={styles.container}>
                <div className={styles.main}>
                    <img 
                        src={images[activeIndex].main} 
                        alt='product'
                        onClick={() => setFullscreen(true)}
                    ></img>
                </div>
                <div className={styles.thumbnails}>
                    {images.map((image, index:number) => {
                        return(
                            <div key={image.id} className={`${styles.thumbnail} ${activeIndex === index ? styles.current : ''}`}>
                                <img 
                                    className={activeIndex === index ? styles.current : ''} 
                                    onClick={() => setActiveIndex(index)}
                                    src={image.thumbnail} 
                                    alt='product'
                                ></img>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}