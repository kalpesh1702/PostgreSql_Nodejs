module.exports = {

	userSql :  function(user){

		let sql = `INSERT INTO marsplay_assignment.users VALUES (
					'${user.id}',
					'${user.name}',
					'${user.username}',
					'${user.email}',
					'${user.phone}',
					'${user.website}',
					ROW('${user.address.street}', '${user.address.suite}', '${user.address.city}', '${user.address.zipcode}', POINT(${user.address.geo.lat}, ${user.address.geo.lng})),
					ROW('${user.company.name}', '${user.company.catchPhrase}', '${user.company.bs}')
				)`;

		return sql;

	},

	todoSql :  function(todo){

		let sql = `INSERT INTO marsplay_assignment.todos VALUES (
					'${todo.id}',
					'${todo.userId}',
					'${todo.title}',
					'${todo.completed}'
				)`;

		return sql;

	},

	postSql : function(post){

		let sql = `INSERT INTO marsplay_assignment.posts VALUES (
					'${post.id}',
					'${post.userId}',
					'${post.title}',
					'${post.body}'
				)`;

		return sql;

	},

	commentSql :  function(comment){

		let sql = `INSERT INTO marsplay_assignment.comments VALUES (
					'${comment.id}',
					'${comment.postId}',
					'${comment.name}',
					'${comment.email}',
					'${comment.body}'
				)`;

		return sql;

	},

	albumSql : function(album){

		let sql = `INSERT INTO marsplay_assignment.albums VALUES (
					'${album.id}',
					'${album.userId}',
					'${album.title}'
				)`;

		return sql;

	},

	photoSql :  function(photo){

		let sql = `INSERT INTO marsplay_assignment.photos VALUES (
					'${photo.id}',
					'${photo.albumId}',
					'${photo.title}',
					'${photo.url}',
					'${photo.thumbnailUrl}'
				)`;

		return sql;

	}

}