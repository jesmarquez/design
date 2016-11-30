var yo = require('yo-yo');

module.exports = yo`
	<div class="container">
		<div class="row">
			<div class="col s3">
			</div>
			<div class="col s6">
				<div class="row">
					<div class="signin-box">
						<h2>Ingresar!</h2>
						<form class="signup-form">
					        <div class="section">
				          		<a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
				          		<a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> Iniciar sesión</a>
				       		</div>
							<div class="section">
						        <div class="input-field">
		      						<input placeholder="Usuario" id="usuario" type="text" class="validate">
		      						<label for="usuario">Usuario</label>
		    					</div>
						        <div class="input-field">
		      						<input placeholder="Contraseña" id="contraseña" type="password" class="validate">
		      						<label for="contraseña">Contraseña</label>
		    					</div>
		    					<button class="btn waves-effect waves-light btn-signup" type="submit">Inicia sesión</button>
	    					</div>
						</form>
					</div>
				</div>
				<div class="row">
					<div class="login-box">
						¿No tienes una cuenta? <a href="/signup">Regístrate</a>
					</div>
				</div>
			</div>
			<div class="col s3">
			</div>
		</div>
	</div>`;