/* global React, AlloyEditor */

(function() {
	'use strict';

	var React = AlloyEditor.React;

	var ItemSelectorGoogleDocs = React.createClass(
		{
			mixins: [AlloyEditor.ButtonCommand],

			displayName: 'ItemSelectorGoogleDocs',

			propTypes: {
				editor: React.PropTypes.object.isRequired,
				imageTPL: React.PropTypes.string
			},

			getDefaultProps: function() {
				return {
					command: 'googledocsselector'
				};
			},

			statics: {
				key: 'googledocs'
			},

			render: function() {
				return (
					<button className="ae-button" data-type="button-googledocs" onClick={this._handleClick} tabIndex={this.props.tabIndex}>
						<span className="icon-file"></span>
					</button>
				);
			},

			_handleClick: function() {
				this.execCommand(null);
			}
		}
	);

	AlloyEditor.Buttons[ItemSelectorGoogleDocs.key] = AlloyEditor.ItemSelectorGoogleDocs = ItemSelectorGoogleDocs;
}());