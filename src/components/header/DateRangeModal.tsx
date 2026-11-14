import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { DayPicker, DateRange } from 'react-day-picker'
import { useI18n } from '../../i18n'
import 'react-day-picker/style.css'
import './dateRangeModal.css'

type Props = {
  initial?: DateRange,
  onConfirm: (range: DateRange) => void,
  onClose: () => void,
}

const DateRangeModal = ({ initial, onConfirm, onClose }: Props) => {
  const { t, dateLocale, direction } = useI18n();
  const [range, setRange] = useState<DateRange | undefined>(initial);
  const [months, setMonths] = useState(window.innerWidth > 800 ? 2 : 1);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    const onResize = () => setMonths(window.innerWidth > 800 ? 2 : 1);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [onClose]);

  const select = (next: DateRange | undefined) => {
    setRange(next);
    if (next?.from && next?.to) onConfirm(next);
  };

  const hint = !range?.from ? t('dateModal.pickArrival') : !range.to ? t('dateModal.pickDeparture') : '';

  // portal to body so the modal floats above the page and never affects the hero layout
  return createPortal(
    <div className='date-modal_backdrop' onClick={onClose}>
      <div className='date-modal' onClick={e => e.stopPropagation()} role='dialog' aria-label={t('dateModal.label')}>
        <DayPicker
          mode='range'
          locale={dateLocale}
          dir={direction}
          weekStartsOn={1}
          numberOfMonths={months}
          selected={range}
          onSelect={select}
          disabled={{ before: today }}
          startMonth={today}
          min={1}
        />
        <p className='date-modal_hint'>{hint}</p>
      </div>
    </div>,
    document.body
  )
}

export default DateRangeModal
