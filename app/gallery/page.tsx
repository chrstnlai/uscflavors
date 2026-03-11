import styles from "./gallery.module.css";
import MouseImageTrail from "../../components/effects/mouse-image-trail";

export default function Gallery() {
    return (
        <MouseImageTrail count={21} maxVisible={21} step={170}>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.heading}>Gallery</h1>
                    <p className={styles.subheading}>*hint: move your mouse around to see the magic.</p>
                </main>
            </div>
        </MouseImageTrail>
    );
}
