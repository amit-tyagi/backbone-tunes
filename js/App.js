(function($){
	window.Album = Backbone.Model.extend({

	});

	window.Albums = Backbone.Collection.extend({
		model: Album,

		url: '/albums'
	});

	window.AlbumView = Backbone.View.extend({
		tagName: 'li',
		
		className: 'album',

		initialize: function() {
			_.bindAll(this, "render");
			this.model.bind("change", this.render);

			this.template = _.template($('#album-template').html());
		},

		render: function() {
			var renderedContent = this.template(this.model.toJSON());
			$(this.el).html(renderedContent);

			return this;
		}
	});

})(jQuery);