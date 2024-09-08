import Image from "next/image";

import styles from "./styles/flag.module.scss";

type FlgaProps = {
  name: string;
  flag: string;
};

export function Flag({ name, flag }: FlgaProps) {
  return (
    <figure className={styles["flag"]}>
      <Image className={styles["flag__img"]} src={flag} alt={name} height={402} width={566} />
    </figure>
  );
}
