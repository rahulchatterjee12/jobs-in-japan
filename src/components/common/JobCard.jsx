import React from "react";
import styles from "./JobCard.module.css";

const JobCard = () => {
  return (
    <div>
      <div class={styles.card}>
        <p class={styles.card_title}>Product Name</p>
        <p class={styles.small_desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
          officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
          eum nihil itaque!
        </p>
        <div class={styles.go_corner}>
          <div class={styles.go_arrow}>→</div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
