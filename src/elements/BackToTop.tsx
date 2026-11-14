import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { useI18n } from '../i18n';

const BackToTop = () => {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type='button'
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      aria-label={t('common.backToTop')}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <FaChevronUp />
    </button>
  );
};

export default BackToTop;
