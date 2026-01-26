import { motion } from 'framer-motion';
import * as S from './PageHeroSection.styles';

export type PageHeroSectionProps = {
  title: string;
  subTitle?: string;
  image: string;
  children?: React.ReactNode;
};

export const PageHeroSection = ({
  title,
  subTitle,
  image,
  children,
}: PageHeroSectionProps) => {
  return (
    <>
      {/* HERO */}
      <S.HeroWrapper $image={image}>
        <S.LightOverlay />
        <S.BottomShape />

        <S.Content>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.8,
              ease: 'easeOut',
            }}
          >
            {title}
          </motion.h1>

          {subTitle && (
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'tween',
                duration: 1.8,
                ease: 'easeOut',
                delay: 0.2,
              }}
            >
              {subTitle}
            </motion.p>
          )}
        </S.Content>
      </S.HeroWrapper>

      {/* CONTEÚDO ABAIXO */}
      {children && (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 18,
            delay: 0.3,
          }}
        >
          <S.ChildrenContent>{children}</S.ChildrenContent>
        </motion.div>
      )}
    </>
  );
};

