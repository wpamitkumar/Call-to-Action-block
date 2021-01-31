/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'create-block/cta-block', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Call to Action', 'cta-block' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Call to Action Block for your page.',
		'cta-block'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
	 */
	category: 'cta-block',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'external',
	keywords: [ "call to action", "cta" ],
	attributes: {
		ctaLayout: {
			type: 'string',
			default: 'layout-style-1'
		},
		ctaBgColor: {
			type: 'string',
			default: 'blue'
		},
		ctaTitle: {
			type: 'string',
			source: 'html',
			selector: 'h4',
			default: 'What is Lorem Ipsum?'
		},
		ctaDescription: {
			type: 'string',
			source: 'html',
			selector: 'p',
			default: 'Lorem ipsum dolor sit amet, consectetur adipisci ng elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipisci ng elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
		},
		ctaLink: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
			default: 'https://wpamitkumar.com/'
		},
		ctaBtnText: {
			type: 'string',
			default: 'GET STARTED'
		},
		ctaTitleColor: {
			type: 'string',
			default: 'white'
		},
		ctaDesciptionColor: {
			type: 'string',
			default: 'white'
		},
		ctaBtnColor: {
			type: 'string',
			default: 'white'
		},
		ctaBtnBgColor: {
			type: 'string',
			default: 'blue'
		},
		ctaHoverColor: {
			type: 'string',
			default: 'blue'
		},
		ctaBgHoverColor: {
			type: 'string',
			default: 'white'
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
