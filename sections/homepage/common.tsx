import styled from 'styled-components';

import {
	FlexDivCol,
	FlexDivColCentered,
	FlexDivRow,
	GridDiv,
	Paragraph,
	ResponsiveImage,
} from 'styles/common';

import media from 'styles/media';

export const SubHeader = styled(Paragraph)`
	font-size: 48px;
	line-height: 120%;
	letter-spacing: 0.2px;
	font-family: ${(props) => props.theme.fonts.bold};
	color: ${(props) => props.theme.colors.white};
	${media.lessThan('lg')`
		font-size: 32px;
		text-align: center;
	`}
`;

export const LeftSubHeader = styled(SubHeader)`
	text-align: left;
`;

export const CenterSubHeader = styled(SubHeader)`
	text-align: center;
`;

export const StackSection = styled(FlexDivColCentered)`
	width: 100%;
`;

export const FlexSection = styled(FlexDivRow)`
	width: 100%;
	${media.lessThan('lg')`
		flex-direction: column;
	`}
`;

export const GridContainer = styled(GridDiv)`
	grid-template-columns: repeat(2, 280px);
	grid-gap: 24px;
	${media.lessThan('sm')`
		grid-template-columns: auto;
	`}
`;

export const Col = styled(FlexDivCol)``;

export const Title = styled(Paragraph)`
	font-size: 16px;
	font-family: ${(props) => props.theme.fonts.bold};
	text-align: left;
	color: ${(props) => props.theme.colors.white};
`;

export const Copy = styled(Paragraph)`
	font-size: 16px;
	font-style: normal;
	line-height: 24px;
	text-align: left;
	color: ${(props) => props.theme.colors.silver};
`;

export const Subtext = styled(Paragraph)`
	font-family: ${(props) => props.theme.fonts.bold};
	font-size: 32px;
	line-height: 120%;
	text-align: center;
	letter-spacing: 0.2px;
	color: ${(props) => props.theme.colors.white};
`;

export const StyledResponsiveImage = styled(ResponsiveImage)`
	max-width: 1200px;
`;
