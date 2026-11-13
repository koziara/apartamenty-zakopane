import { LangLink, useI18n } from '../../i18n';
import PageMeta from '../../seo/PageMeta';
import './errorPage.css';

const ErrorPage = () => {
  const { t } = useI18n();

  return (
    <div id="error-page">
      <PageMeta title={t('meta.notFoundTitle')} description={t('errorPage.text')} path='/' noindex />
      <h1>{t('errorPage.title')}</h1>
      <h3>{t('errorPage.text')}</h3>
      <LangLink to='/'>{t('errorPage.home')}</LangLink>
    </div>
  );
}

export default ErrorPage;