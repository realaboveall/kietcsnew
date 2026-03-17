import Image from "next/image";
import styles from "./FacultyCard.module.css";

interface FacultyCardProps {
  name: string;
  designation: string;
  expertise: string;
  imageUrl: string;
}

const FacultyCard: React.FC<FacultyCardProps> = ({
  name,
  designation,
  expertise,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.designation}>{designation}</p>
        <p className={styles.expertiseText}>{expertise}</p>
      </div>
    </div>
  );
};

export default FacultyCard;
