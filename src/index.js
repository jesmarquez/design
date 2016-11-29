var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');

page('/', function(ctx, next){
	var mainSection = document.getElementById('main-section');

	var contenidoMain = yo`
	<div class="container">
		  <div class="row">
		    <div class="col s6">
		      <div id="bolsa">
		        <div class="card blue darken-3">
		          <div class="card-content white-text"><span class="card-title">Bolsa de empleo</span>
		            <p>
		              Encuentra opciones para el inicio de tu carrera profesional.
		              Las mejores oportunidades disponibles para ti.
		            </p>
		          </div>
		          <div class="card-action"><a href="/signup">Registrate</a><a href="#">Explora!</a></div>
		        </div>
		      </div>
		    </div>
		    <div class="col s6">
		      <div id="gestion">
		        <div class="card blue darken-3">
		          <div class="card-content white-text"><span class="card-title">Gestión</span>
		            <p>
		              Ejecuta las actividades de las prácticas profesionales con recursos y estructuras en TIC.
		              Las mejor gestión en documentos, en calidad, comunicación y conocimiento.
		            </p>
		          </div>
		          <div class="card-action"><a href="/signup">Registrate</a><a href="#">Explora!</a></div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>`;

		var secondarySection = document.getElementById('secondary-section');
		var contenidoSecondary = yo`
		<div class="col s12">
		  <div id="statistics">
		    <div class="collection">
		    	<a href="#!" class="collection-item"><span class="badge">15</span>Ofertas</a>
		    	<a href="#!" class="collection-item"><span class="new badge">4</span>Empresas</a>
		    	<a href="#!" class="collection-item"><span class="badge">70</span>Practicantes</a>
		    	<a href="#!" class="collection-item"><span class="badge">4</span>Universidades</a></div>
		  </div>
		</div>`;

	empty(mainSection).appendChild(contenidoMain);
    empty(secondarySection).appendChild(contenidoSecondary);
})


page('/signup', function(ctx, next){
	var mainSection = document.getElementById('main-section');
	var secondarySection = document.getElementById('secondary-section');

    var login = yo`
    	<div class="container">
    		<div class="row">
    			<div class="col s3">
    			</div>
    			<div class="col s6">
    				<div class="signup-box">
    					<h2>Registrate!</h2>
    					<form>
					        <div class="input-field">
          						<input placeholder="Placeholder" id="first_name" type="text" class="validate">
          						<label for="first_name">First Name</label>
        					</div>
					        <div class="input-field">
          						<input placeholder="Placeholder" id="second_name" type="text" class="validate">
          						<label for="second_name">Second Name</label>
        					</div>
    					</form>
    				</div>
    			</div>
    			<div class="col s3">
    			</div>
    		</div>
    	</div>
    `;

    empty(mainSection).appendChild(login);
    empty(secondarySection);
})

page();	