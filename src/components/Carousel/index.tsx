"use client";

import { useEffect, useState } from "react";
import HeroDetails from "../HeroDetails";
import styles from "./carousel.module.scss";
import { IHeroData } from "@/interfaces/heroes";
import HeroPicture from "../HeroPicture";
import { AnimatePresence, motion } from "framer-motion";

interface IProps {
  heroes: IHeroData[];
  activeId: string;
}

export default function Carousel({ heroes, activeId }: IProps) {
  const [visibleItems, setVisibleItems] = useState<IHeroData[] | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(
    heroes.findIndex((hero) => hero.id === activeId)
  );

  useEffect(() => {
    const indexInArrayScope =
      ((activeIndex % heroes.length) + heroes.length) % heroes.length;

    const visibleItems = [...heroes, ...heroes].slice(
      indexInArrayScope,
      indexInArrayScope + 3
    );

    setVisibleItems(visibleItems);
  }, [heroes, activeIndex]);

  // altera o herói ativo no carrossel
  const handleChangeActiveIndex = (newDirection: number) => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex + newDirection);
  };

  if (!visibleItems) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div
          className={styles.wrapeer}
          onClick={() => handleChangeActiveIndex(1)}
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <motion.div key={item.id} className={styles.hero}>
                <HeroPicture hero={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className={styles.details}>
        <HeroDetails data={heroes[0]} />
      </div>
    </div>
  );
}
