var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function(){
		return(
			<div className="row">
				<div className="col-sm-12">
					<h1>Login</h1>
						<form onSubmit={this.login}>
							<label>Username</label><br/>
							<input ref="username" type="text"/><br/>
							<label>Password</label><br/>
							<input ref="pass" type="password"/><br/>
							<button>Login</button>
						</form>
				</div>
			</div>
		);
	},
	login: function(e){
		e.preventDefault();
		self = this;
		var username = this.refs.username.getDOMNode().value;
		var password = this.refs.pass.getDOMNode().value;
		console.log('click')
		$.ajax({
		    url: 'http://localhost:3000/login',
		    data: {username: username, password: password},
		    type: 'POST',
		    success: function(result) {
		        console.log(result);
		        // self.fetchData();
		        localStorage.setItem('username', result.username);
		        localStorage.setItem('id', result.id);
		         console.log(result.username)
		        self.props.router.navigate('/maps/'+result.username, {trigger: true});
		    },
		    error: function(err){
		    	console.log(err);
		    }
		});
	}
})