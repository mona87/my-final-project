var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function(){
		var style ={
			width: '300px',
			margin: '150px auto auto auto',
			display: 'block'
		}
		var red ={
			color: 'red'
		}
		var holder = {
		

			}
		var button ={
		


		}
		var pStyle ={
			color: 'white',
			fontSize: '20px',
			textAlign: 'center',
			margin: '30px 0 20px 0'
		}
		return(
			<div className="locateHolder">{/*<div className="col-sm-12">
					<form style={style} onSubmit={this.login}>
							<h1>Login</h1>
							<div style={red} ref="error"></div>
							<label>Username</label><br/>
							<input ref="username" type="text"/><br/>
							<label>Password</label><br/>
							<input ref="pass" type="password"/><br/>
							<br/>
							<button>Login</button>
						</form>
				</div>*/}
				<div >
					<div className="locateWrapper" >
						<p style={pStyle}>Click below to begin!</p>
						<button onClick={this.navigate} className="locateBtn" style={button}>Find My Location</button>
					</div>
				</div>
			</div>
		);
	},
	navigate: function(e){
		e.preventDefault();
		this.props.router.navigate('/user/mona',  {trigger: true});
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
		          self.refs.error.getDOMNode().innerHTML = "";
		        self.props.router.navigate('/user/'+result.username, {trigger: true});

		    },
		    error: function(err){
		    	console.log(err);
		    	 self.refs.error.getDOMNode().innerHTML = err.responseText
		    }
		});
	}
})