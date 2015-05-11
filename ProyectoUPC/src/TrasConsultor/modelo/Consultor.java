package TrasConsultor.modelo;

public class Consultor {
	private String idConsultor; 
    private String nomConsultor; 
    private String especializacion;
    private String categoria;
	
    public Consultor(String idConsultor, String nomConsultor,
			String especializacion, String categoria) {
		super();
		this.idConsultor = idConsultor;
		this.nomConsultor = nomConsultor;
		this.especializacion = especializacion;
		this.categoria = categoria;
	} 
     
    public Consultor() {
		super();
		
	}

	public String getIdConsultor() {
		return idConsultor;
	}

	public void setIdConsultor(String idConsultor) {
		this.idConsultor = idConsultor;
	}

	public String getNomConsultor() {
		return nomConsultor;
	}

	public void setNomConsultor(String nomConsultor) {
		this.nomConsultor = nomConsultor;
	}

	public String getEspecializacion() {
		return especializacion;
	}

	public void setEspecializacion(String especializacion) {
		this.especializacion = especializacion;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
    
}
