import React from 'react';
import styles from './TeamMember.module.css';

interface TeamMemberCardProps {
  imageSrc: string;
  name: string;
  specialty: string;
  bio: string; // Shorter bio for front or if no flip
  fullBio?: string; // Longer bio for back of card (on flip)
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  imageSrc,
  name,
  specialty,
  bio,
  fullBio
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardInner}>
        {/* Front of the Card */}
        <div className={styles.cardFront}>
          <div className={styles.imageWrapper}>
            <img src={imageSrc} alt={name} className={styles.memberImage} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.memberName}>{name}</h3>
            <p className={styles.memberSpecialty}>{specialty}</p>
            <p className={styles.memberBioShort}>{bio}</p>
          </div>
          <div className={styles.hoverIndicator}>Hover for more</div>
        </div>

        {/* Back of the Card (revealed on flip) */}
        <div className={styles.cardBack}>
          <h3 className={styles.memberNameBack}>{name}</h3>
          <p className={styles.memberSpecialtyBack}>{specialty}</p>
          <hr className={styles.divider} />
          <p className={styles.memberBioFull}>{fullBio || bio}</p>
          {/* You could add social links or other details here */}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;