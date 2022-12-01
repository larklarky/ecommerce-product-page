import styles from './styles/Gallery.module.css';
import {Image} from './App';
import { GalleryModal } from './GalleryModal';
import { useState } from 'react';
import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi';

type GalleryProps = {
    images: Image[];
}

export const Gallery = ({images}: GalleryProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [fullscreen, setFullscreen] = useState<boolean>(false);

    const handleLeftClick = () => {
        if(activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        } else {
            setActiveIndex(images.length - 1)
        }
    }

    const handleRightClick = () => {
        if(activeIndex < images.length - 1) {
            setActiveIndex(activeIndex + 1)
        } else {
            setActiveIndex(0)
        }
    }

    const handleClose = () => {
        setFullscreen(false)
    }

    return(
        <>
            {fullscreen ? <GalleryModal images={images} index={activeIndex} handleClose={() => handleClose()}/> : ''}
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.controls}>
                        <div className={styles.control} onClick={() => handleLeftClick()}><HiOutlineChevronLeft size='25px'/></div>
                        <div className={styles.control} onClick={() => handleRightClick()}><HiOutlineChevronRight size='25px'/></div>
                    </div>
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