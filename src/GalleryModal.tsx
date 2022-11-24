import styles from './styles/GalleryModal.module.css';
import {Image} from './App';
import { useState } from 'react';
import {IoIosClose} from 'react-icons/io';
import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi';


type GalleryProps = {
    images: Image[];
    index: number;
    handleClose: () => void;
}

export const GalleryModal = ({images, index, handleClose}: GalleryProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(index);
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
    return(
        <div className={styles.container}>
            <div className={styles.close}><IoIosClose size='40px' onClick={() => handleClose()}/></div>
            <div className={styles.main}>
                <div className={styles.controls}>
                    <div className={styles.control} onClick={() => handleLeftClick()}><HiOutlineChevronLeft size='25px'/></div>
                    <div className={styles.control} onClick={() => handleRightClick()}><HiOutlineChevronRight size='25px'/></div>
                </div>
                <img src={images[activeIndex].main} alt='product'></img>
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
    )
}