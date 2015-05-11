<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Sistema Consultores</title>
<head>

<script src="js/jquery-1.10.2.js"></script>
<script src="js/jquery-ui.js"></script>
<link rel="stylesheet" href="bootstrap/css/bootstrap.css" />
<script src="bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="css/styleBody.css" />
</head>

<body>
<div class="container">
		<%@include file="/template/Header.jsp"%>
		<div class="row">
			<div class="panel-default">
				<div class="col-xs-12">
					<%@include file="/template/Menu.jsp"%>
					<div class="col-md-9">
						<div class="panel panel-default">
							<div class="panel-heading">
								<strong>Mantenimiento de Consultor</strong>
							</div>
							<div class="panel-body">
								<div>
									<span class="fa fa-info-circle"></span> <span id="informacion"> Ingrese el Registro de un nuevo Espacio en Comun.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
<form id="form1" name="form1" method="post" action="ConsultorInsertarServlet" class="form-horizontal" role="form">
  <table class="table table-hover">
    <tr>
      <td>IdConsultor</td>
      <td><label>
        <input class="form-control" type="text" name="idConsultor" id="idConsultor"/>
      </label></td>
    </tr>
    <tr>
      <td>NombreConsultor</td>
      <td><label>
        <input class="form-control" type="text" name="nomConsultor" id="nomConsultor"/>
      </label></td>
    </tr>
    <tr>
      <td>Especializacion</td>
      <td><label>
        <input class="form-control" type="text" name="especializacion" id="especializacion"/>
      </label></td>
    </tr>
        
    <tr>
      <td >Categoria:</td>
      <td><label>
         <select class="form-control" type= "text" name="categoria" id="categoria">
 				 	<option >Senior1</option>
  					<option >Senior2</option>
  					<option >Junior1</option>
  					<option >Junior2</option>
  		</select>
      </label></td>
    </tr>
    
    <tr>
      <td colspan="2">
         <input class="btn btn-success" type="submit" value="Guardar" />
        <input class="btn btn-default" type="button" value="Regresar" onclick="window.location='MantenimientoConsultor.jsp' " />
      </td>
    </tr>
  </table> 
  <p>&nbsp;</p>
</form>
</body>
</html>