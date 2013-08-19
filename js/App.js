(function($){
	window.Tunes = Backbone.Model.extend({

	});

	window.TunesView = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "render");
			this.model.on("change", this.render, this);

			this.template = _.template($('#song-list').html());
		},

		render: function() {
			var renderedContent = this.template(this.model.toJSON());
			$(this.el).html(renderedContent);

			return this;
		}
	});

})(jQuery);