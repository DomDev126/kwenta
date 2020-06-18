import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import HomeLayout from 'sections/shared/Layout/HomeLayout';

const HomePage = () => {
	const { t } = useTranslation();

	return (
		<>
			<Head>
				<title>{t('homepage.page-title')}</title>
			</Head>
			<HomeLayout>
				<div>Home</div>
			</HomeLayout>
		</>
	);
};

export default HomePage;
