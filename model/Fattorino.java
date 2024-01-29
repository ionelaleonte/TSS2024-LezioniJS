package model;

public class Fattorino extends Dipendente {
	
	private int numeroConsegne;

	public Fattorino(String nome, String cognome) {
		super(nome, cognome);
		
	}

	public int getNumeroConsegne() {
		return numeroConsegne;
	}
	
	

	

	@Override
	public String toString() {
		return "Fattorino [nome e cognome="+
				super.nome+" "+ 
				this.cognome+
				" numeroConsegne=" + 
				numeroConsegne + 
				"]";
	}

	public void setNumeroConsegne(int numeroConsegne) {
		this.numeroConsegne = numeroConsegne;
	}
	
	public void calcolaStipendio() {
		this.stipendio= numeroConsegne *5;
	}

}
