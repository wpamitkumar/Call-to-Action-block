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
import { RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
	const { attributes } = props;

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
		ctaBtnBgColor
	} = attributes;

	return (
		<div className={ ` demo-call-to-action-widget ${ctaLayout}` } style={ { backgroundColor:  `${ ctaBgColor }` } }>
			<div className={"demo-call-to-action-widget__content"}>
				<RichText.Content
					className={ "call-to-action-title" }
					tagName="h4"
					value={ctaTitle}
					placeholder={ __( "CTA Title", 'cta-block') }
					style={ { color: ctaTitleColor } }
				/>
				<RichText.Content
					className={ "call-to-action-description" }
					tagName="p"
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
				>
					{ctaBtnText}
				</Button>
			</div>
		</div>
	);
}
