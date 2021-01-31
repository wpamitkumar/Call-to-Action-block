/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {  RichText, InspectorControls, ColorPalette } from '@wordpress/block-editor';

import { Button, PanelBody, SelectControl, TextControl, TabPanel } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const { className, attributes, setAttributes } = props;
	const {
		ctaLayout,
		ctaBgColor,
		ctaTitle,
		ctaDescription,
		ctaLink,
		ctaBtnText,
		ctaTitleColor,
		ctaDesciptionColor,
		ctaBtnColor,
		ctaBtnBgColor,
		ctaHoverColor,
		ctaBgHoverColor
	} = attributes;

	const onChangeTitle = ( newvalue ) => {
		setAttributes( { ctaTitle: newvalue } );
	}

	const onChangeDescription = ( newvalue ) => {
		setAttributes( { ctaDescription: newvalue } );
	}

	const changeHoverColors = ( event ) => {
		event.target.style.color = ctaHoverColor;
		event.target.style.backgroundColor = ctaBgHoverColor;
	}

	const changeOnHoverOutColors = ( event ) => {
		event.target.style.color = ctaBtnColor;
		event.target.style.backgroundColor = ctaBtnBgColor;
	}

	const ctaLinkNormalSettings = (
		<>
			<p>{ __( "Text Color", "smart-blocks" ) }</p>
			<ColorPalette
				value={ ctaBtnColor }
				onChange={ ( colorValue ) => setAttributes( { ctaBtnColor: colorValue } ) }
				allowReset
			/>
			<p>{ __( "Background Color", "smart-blocks" ) }</p>
			<ColorPalette
				value={ ctaBtnBgColor }
				onChange={ ( colorValue ) => setAttributes( { ctaBtnBgColor: colorValue } ) }
				allowReset
			/>
		</>
	)

	const ctaLinkHoverSettings = (
		<>
			<p>{ __( "Text Hover Color", "smart-blocks" ) }</p>
			<ColorPalette
				value={ ctaHoverColor }
				onChange={ ( colorValue ) => setAttributes( { ctaHoverColor: colorValue } ) }
				allowReset
			/>
			<p>{ __( "Background Hover Color", "smart-blocks" ) }</p>
			<ColorPalette
				value={ ctaBgHoverColor }
				onChange={ ( colorValue ) => setAttributes( { ctaBgHoverColor: colorValue } ) }
				allowReset
			/>
		</>
	)

	return (
		<>
			<InspectorControls>
				<PanelBody 
					title={ __( 'Layout', 'cta-block' ) }
					initialOpen={true}
				>
					<SelectControl
						label={ __( "Design Layout", 'cta-block') }
						value={ ctaLayout }
						onChange={ ( value ) => setAttributes( { ctaLayout: value } ) }
						options={ [
							{ value: "layout-style-1", label: __( "Layout Style 1", 'cta-block' ) },
							{ value: "layout-style-2", label: __( "Layout Style 2", 'cta-block' ) },
						] }
					/>

					<p><strong>{ __( 'Background color:', 'cta-block' ) }</strong></p>
					<ColorPalette
						value={ ctaBgColor }
						onChange={ (newColor) => setAttributes( {ctaBgColor: newColor} ) }
					/>
				</PanelBody>
				<PanelBody 
					title={ __( 'Contents', 'cta-block' ) }
					initialOpen={false}
				>
					<h2>{ __( 'Heading', 'cta-block' ) }</h2>
					<p><strong>{ __( 'Title color:', 'cta-block' ) }</strong></p>
					<ColorPalette
						value={ ctaTitleColor }
						onChange={ (newColor) => setAttributes( {ctaTitleColor: newColor} ) }
					/>
					<hr />
					<h2>{ __( 'Description', 'cta-block' ) }</h2>
					<p><strong>{ __( 'Description color:', 'cta-block' ) }</strong></p>
					<ColorPalette
						value={ ctaDesciptionColor }
						onChange={ (newColor) => setAttributes( {ctaDesciptionColor: newColor} ) }
					/>
				</PanelBody>
				<PanelBody 
					title={ __( 'Link Button', 'cta-block' ) }
					initialOpen={false}
				>
					<TextControl
						label={__( 'Text', 'cta-block' )}
						value={ ctaBtnText }
						onChange={ ( newVal ) => setAttributes( { ctaBtnText: newVal } ) }
					/>
					<TextControl
						label={__( 'Link', 'cta-block' )}
						value={ ctaLink }
						onChange={ ( newVal ) => setAttributes( { ctaLink: newVal } ) }
					/>
					<hr />
					<TabPanel className="link-button-tab-panel"
						activeClass="active-tab"
						tabs={ [
							{
								name: 'normal',
								title: __( 'Normal', 'cta-block'),
								className: 'link-button-tab',
							},
							{
								name: 'hover',
								title: __( 'Hover', 'cta-block'),
								className: 'link-button-tab',
							},
						] }>
						{
							( tab ) => {
								let tabs;
								if( "normal" === tab.name ) {
									tabs = ctaLinkNormalSettings
								}else {
									tabs = ctaLinkHoverSettings
								}
								return <div>{ tabs }</div>;
							}
						}
					</TabPanel>
				</PanelBody>
			</InspectorControls>

			<div className={ `${ className } demo-call-to-action-widget ${ctaLayout}` } style={ { backgroundColor:  `${ ctaBgColor }` } }>
				<div className={ "demo-call-to-action-widget__content" }>
					<RichText
						className={ "call-to-action-title" }
						tagName="h4"
						onChange={ onChangeTitle }
						value={ctaTitle}
						placeholder={ __( "CTA Title", 'cta-block') }
						style={ { color: ctaTitleColor } }
					/>
					<RichText
						className={ "call-to-action-description" }
						tagName="p"
						onChange={ onChangeDescription }
						value={ctaDescription}
						placeholder={ __( "CTA Info", 'cta-block') }
						style={ { color: ctaDesciptionColor } }
					/>
				</div>
				<div className={"demo-call-to-action-widget__button-area"}>
					<Button
						isSecondary
						href={ ctaLink }
						style={{ color: ctaBtnColor, backgroundColor: ctaBtnBgColor }}
						onMouseOver={ changeHoverColors }
						onMouseOut={ changeOnHoverOutColors }
					>
						{ctaBtnText}
					</Button>
				</div>
			</div>
		</>
	);

}
