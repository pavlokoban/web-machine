import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
    return (
        <div className={styles.background_wrapper}>
            <div className={styles.container_anim}>
                <div className={styles.monitor}>
                    <div className={`${styles.camera} ${styles.o_x}`}>
                        <div className={`${styles.camera} ${styles.o_y}`}>
                            <div className={`${styles.camera} ${styles.o_z}`}>
                                <div className={styles.vr}>
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <div key={i} className={styles.vr_layer}>
                                            <div className={styles.vr_layer_item}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {Array.from({ length: 400 }).map((_, i) => (
                    <div key={i} className={styles.trigger}></div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedBackground;
