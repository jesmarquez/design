var yo = require('yo-yo');

module.exports = yo`
	<div class="container">
		<div class="row">
			<div class="col s3">
			</div>
			<div class="col s6">
				<h3>Registrate para iniciar la gestión de prácticas profesionales...</h3>
				<div class="row">
					<div class="signup-box">
						<form class="signup-form">
					        <div class="input-field">
	      						<input placeholder="Nombre completo" id="nombre_completo" type="text" class="validate">
	      						<label for="nombre_completo">Nombre completo</label>
	    					</div>
					        <div class="input-field">
	      						<input placeholder="Correo electrónico" id="correo_electronico" type="text" class="validate">
	      						<label for="correo_electronico">Correo electrónico</label>
	    					</div>
					        <div class="input-field">
	      						<input placeholder="Nombre de usuario" id="nombre_usuario" type="text" class="validate">
	      						<label for="nombre_usuario">Nombre de usuario</label>
	    					</div>
					        <div class="input-field">
	      						<input placeholder="Contraseña" id="contraseña" type="password" class="validate">
	      						<label for="contraseña">Contraseña</label>
	    					</div>
	    					<button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
						</form>
					</div>
				</div>
		   	    <div class="row">
    				<div class="login-box">
      				¿Tienes una cuenta? <a href="/signin">Entrar</a>
    				</div>
  				</div>
			</div>
			<div class="col s3">
			</div>
		</div>
	</div>`;