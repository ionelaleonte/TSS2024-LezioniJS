package model;

public class Dipendente {
	
	protected String nome;
	protected String cognome;
	private int numeroMatricola;
	protected double stipendio;
	
	private static int matricolatore=1;

	public Dipendente(String nome, String cognome) {
		super();
		this.nome = nome;
		this.cognome = cognome;
		this.numeroMatricola=matricolatore++;
	}

	@Override
	public String toString() {
		return "Dipendente [nome=" + nome + ", cognome=" + cognome + ", numeroMatricola=" + numeroMatricola
				+ ", stipendio=" + stipendio + "]";
	}
	
	
	
	
}

