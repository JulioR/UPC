<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="es">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width,initial-scale=1">
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
								<strong>Actualización de Consultores</strong>
							</div>
							<div class="panel-body">
								<div>
									<span class="fa fa-info-circle"></span> <span id="informacion">Debe
										ingresar al menos un filtro de búsqueda.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
								<hr>
	<form id="form1" name="form1" method="post" action="ConsultarBuscarServlet" role="form">
									<div class="form-group">
										<label for="exampleInputName2">Consultor: </label> 
										<input type="text" class="form-control" name="nombre">
									</div>
									<input type="submit" class="btn btn-default" name="button" id="button" value="BUSCAR"/>
									<input type="button" class="btn btn-default" name="button2" id="button2" value="NUEVO" onclick ="window.location='Consultor_Nuevo.jsp' ">									
									
									
							</form>
									<div class="table-responsive">
										<br>
										<table class="table table-bordered">
											<tr>
												<td>Id Consultor</td>
												<td>Nombres</td>
												<td>Especializacion</td>
												<td>Categoria</td>
												<td>Opciones</td>												
											</tr>
											
											
		<%@page import="java.util.*, TrasConsultor.modelo.Consultor" %>
				<%
		Collection<Consultor> arreglo = (ArrayList<Consultor>)request.getAttribute("consultor");
		if(arreglo != null) { 
		int i = 1;
		for(Consultor x : arreglo) {
		%> 
		 
		 
		  <tr>
		    <td><% out.print(x.getIdConsultor()); %></td>
		    <td><% out.print(x.getNomConsultor()); %></td>
		    <td><% out.print(x.getEspecializacion()); %></td>
		    <td><% out.print(x.getCategoria()); %></td>
		  <td>
		  
<a class="btn btn-warning" href="<%=request.getContextPath() %>/ConsultorEditarServlet?id=<%=x.getIdConsultor() %>">Modificar</a>
<a class="btn btn-danger"  href="<%=request.getContextPath()%>/ConsultorEliminarServlet?id=<%=x.getIdConsultor() %>" onclick="return confirm('¿Está seguro que desea eliminar');">Eliminar</a>
</td>		
		</tr>
		<% }  
		  } %>
		  </table>
</div>
								
							
</body>
</html>
