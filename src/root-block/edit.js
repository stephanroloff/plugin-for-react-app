import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes }) {
	return (
		<div {...useBlockProps()}>
			<p>React App</p>
		</div>
	);
}
