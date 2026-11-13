import { useId, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useI18n } from '../../i18n';

type ApartmentDescriptionProps = {
  description: string;
};

const ApartmentDescription = ({ description }: ApartmentDescriptionProps) => {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  let paragraphs = description.split(/\n\s*\n/).map(paragraph => paragraph.trim()).filter(Boolean);

  if (paragraphs.length === 1) {
    const sentences = description.match(/[^.!?]+(?:[.!?]+|$)/g)?.map(sentence => sentence.trim()) || [description];
    paragraphs = [sentences.slice(0, 2).join(' '), sentences.slice(2).join(' ')].filter(Boolean);
  }

  const [intro, ...remaining] = paragraphs;

  return (
    <div className='apartment-overview__copy'>
      <p>{intro}</p>
      {remaining.length > 0 && (
        <>
          <div className='apartment-overview__description-rest' id={contentId} hidden={!expanded}>
            {remaining.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          <button
            type='button'
            className='apartment-overview__toggle'
            aria-expanded={expanded}
            aria-controls={contentId}
            onClick={() => setExpanded(current => !current)}
          >
            {expanded ? t('details.collapse') : t('details.expand')} <FiChevronDown aria-hidden='true' />
          </button>
        </>
      )}
    </div>
  );
};

export default ApartmentDescription;
