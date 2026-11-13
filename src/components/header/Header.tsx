import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DateRange } from 'react-day-picker'
import { FaRegCalendarAlt, FaArrowRight } from 'react-icons/fa'
import { Navbar } from '../../elements'
import DateRangeModal from './DateRangeModal'
import { useI18n } from '../../i18n'
import "./header.css"

const toIso = (d: Date) => {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

const Header = () => {
  const { t, intl, path } = useI18n();
  const toLabel = (d?: Date) => d ? d.toLocaleDateString(intl) : '';
  const navigate = useNavigate();
  const [range, setRange] = useState<DateRange | undefined>();
  const [open, setOpen] = useState(false);

  const search = (e: React.FormEvent) => {
    e.preventDefault();
    // the booking widget ignores incomplete ranges, so ask for dates first
    if (!range?.from || !range?.to) { setOpen(true); return; }
    const params = new URLSearchParams();
    params.set('dateFrom', toIso(range.from));
    params.set('dateTo', toIso(range.to));
    navigate(path(`/Rezerwacje?${params.toString()}`));
  }

  return (
    <header className='header-container'>
        <Navbar />
        <div className='header-container_content'>
          <h1>{t('hero.titleLine1')}</h1>
          <div className='header-container_line' />
          <p className='header-container_subtitle'>{t('hero.subtitle')}</p>
          <form className='hero-search' onSubmit={search}>
            <button type='button' className='hero-search_field' onClick={() => setOpen(true)}>
              <FaRegCalendarAlt className='hero-search_icon' />
              <span className={range?.from ? '' : 'placeholder'}>{toLabel(range?.from) || t('hero.arrival')}</span>
            </button>
            <button type='button' className='hero-search_field' onClick={() => setOpen(true)}>
              <FaRegCalendarAlt className='hero-search_icon' />
              <span className={range?.to ? '' : 'placeholder'}>{toLabel(range?.to) || t('hero.departure')}</span>
            </button>
            <button type='submit' className='hero-search_button'>{t('common.checkAvailability')} <FaArrowRight /></button>
          </form>
        </div>
        {open && (
          <DateRangeModal
            initial={range}
            onConfirm={r => { setRange(r); setOpen(false); }}
            onClose={() => setOpen(false)}
          />
        )}
    </header>
  )
}

export default Header
